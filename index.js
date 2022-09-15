let button_sort = document.getElementById("button_sort");
let bar_container = document.getElementById("bar_container");

let num_bars = 20;
let min_height = 2;
let max_height = 20;
let height_multiplier = 20; // allows more visually noticable difference between bar heights
let delay_ms = 20;

let unsorted_arr = new Array(num_bars);
let sorted = false;

// calls function on load
document.addEventListener("DOMContentLoaded", function() {
    randomizeArray();
    renderBars(unsorted_arr);
});

button_sort.addEventListener("click", function () {
    if (sorted) {
        location.reload();
    } else {
        let sorted_arr = bubbleSort(unsorted_arr);
        console.log(sorted_arr);
        let button_sort_icon = document.getElementById("button_sort_icon");
        button_sort_icon.classList.remove("fa-play");
        button_sort_icon.classList.add("fa-repeat");
        sorted = true;
    }
});

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeArray() {
    for (let i = 0; i < num_bars; i++) {
        unsorted_arr[i] = getRandomNum(min_height, max_height);
    }
}

function renderBars(arr) {
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div"); 
        bar.classList.add("bar");
        bar.style.height = arr[i] * height_multiplier + "px";
        bar_container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(arr) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            
                bars[j].style.backgroundColor = "green";
                bars[j + 1].style.backgroundColor = "green";

                if (arr[j] > arr[j + 1]) {
                    // swap array values
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    // animate
                    bars[j].style.backgroundColor = "green";
                    bars[j + 1].style.backgroundColor = "green";
                    await sleep(delay_ms);
                    bars[j].style.height = arr[j] * height_multiplier + "px";
                    bars[j + 1].style.height = arr[j + 1] * height_multiplier + "px";                 
                    await sleep(delay_ms);
                } else {
                    await sleep(delay_ms);
                }

                bars[j].style.backgroundColor = "black";
                bars[j + 1].style.backgroundColor = "black";
            
        }
    }
    return arr;
}

