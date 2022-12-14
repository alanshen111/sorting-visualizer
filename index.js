// remember to inspect element to check console

let button_sort = document.getElementById("button_sort");
let select_algo = document.getElementById("select_algo");
let bar_container = document.getElementById("bar_container");
let num_bars_slider = document.getElementById("num_bars_slider");
let info_container = document.getElementById("info_container");
let complexity_container = document.getElementById("complexity_container");
let code_container = document.getElementById("code_container");

let num_bars = num_bars_slider.value;
let min_height = 2;
let max_height = 30;
let height_multiplier = 20; // allows more visually noticable difference between bar heights
let delay_ms = 40;

let my_array = new Array(num_bars);
let current_algo = select_algo.value;
let sorting = false;

let color_bar_default = "black";
let color_bar_sorting = "green";
let color_bar_wrong = "red";

// calls function on load
document.addEventListener("DOMContentLoaded", function() {
    randomizeArray();
    renderBars();
    renderInfo();
});

num_bars_slider.addEventListener("input", function () {
    num_bars = num_bars_slider.value;
    console.log(num_bars + " bars selected");
    bar_container.innerHTML = "";
    my_array = Array(num_bars);
    randomizeArray();
    renderBars();
});

select_algo.addEventListener("change", function () {
    console.log(select_algo.value + " selected");
    current_algo = select_algo.value;
    renderInfo();
});

button_sort.addEventListener("click", function () {
    if (sorting) {
        location.reload();
    } else {
        num_bars_slider.disabled = true;
        sorting = true;
        console.log(current_algo + " running");
        switch (current_algo) {
            case "Bubble": 
                bubble(my_array); 
                break;
            case "Insertion": 
                insertion(my_array);
                break;
            case "Bogo":
                bogo(my_array);
                break;
            default: 
                info_container.textContent="this is an error.";
                break;
        }
        let button_sort_icon = document.getElementById("button_sort_icon");
        button_sort_icon.classList.remove("fa-play");
        button_sort_icon.classList.add("fa-repeat");
    }
});