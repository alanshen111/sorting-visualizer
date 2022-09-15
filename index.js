// remember to inspect element to check console

let button_sort = document.getElementById("button_sort");
let select_algo = document.getElementById("select_algo");
let bar_container = document.getElementById("bar_container");

let num_bars = 20;
let min_height = 2;
let max_height = 20;
let height_multiplier = 20; // allows more visually noticable difference between bar heights
let delay_ms = 20;

let my_array = new Array(num_bars);
let current_algo = select_algo.value;
let sorted = false;

// calls function on load
document.addEventListener("DOMContentLoaded", function() {
    randomizeArray();
    renderBars(my_array);
});

select_algo.addEventListener("change", function () {
    console.log(select_algo.value + " selected");
    current_algo = select_algo.value;
});

button_sort.addEventListener("click", function () {
    if (sorted) {
        location.reload();
    } else {
        console.log(current_algo + " running");
        switch (current_algo) {
            case "bubble": 
                bubbleSort(my_array); 
                break;
            case "insertion": 
                insertionSort(my_array);
                break;
            default: 
                break;
        }
        let button_sort_icon = document.getElementById("button_sort_icon");
        button_sort_icon.classList.remove("fa-play");
        button_sort_icon.classList.add("fa-repeat");
        sorted = true;
    }
});