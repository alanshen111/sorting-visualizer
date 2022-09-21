function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeArray() {
    for (let i = 0; i < num_bars; i++) {
        my_array[i] = getRandomNum(min_height, max_height);
    }
}

function renderBars() {
    for (let i = 0; i < my_array.length; i++) {
        let bar = document.createElement("div"); 
        bar.classList.add("bar");
        bar.style.height = my_array[i] * height_multiplier + "px";
        bar_container.appendChild(bar);
    }
}

function renderInfo() { 
    
    switch (current_algo) {
        case "Bubble": 
            info_container.innerHTML = "<b>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. </b> ";
            complexity_container.innerHTML =
            `
            Time: O(n²) <br></br>
            Space: O(1)
            `;
            code_container.innerHTML =
            `
            for (let i = 0; i < arr.length; i++) { <br></br>
            &emsp;    for (let j = 0; j < arr.length - i - 1; j++) { <br></br>
            &emsp;&emsp;        if (arr[j] > arr[j + 1]) { <br></br>
            &emsp;&emsp;&emsp;            swap(arr[j], arr[j+1]); <br></br>
            &emsp;&emsp;        }  <br></br>
            &emsp;    } <br></br>
            } <br></br>
            `;
            break;
        case "Insertion": 
            info_container.innerHTML ="<b>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</b>";
            complexity_container.innerHTML =
            `
            Time: O(n²) <br></br>
            Space: O(1)
            `;
            code_container.innerHTML =
            `
            for (let i = 1; i < arr.length; i++) { <br></br>
            &emsp;    let key = arr[i]; <br></br>
            &emsp;    let j = i - 1; <br></br>
            &emsp;    while (j >= 0 && arr[j] > key) { <br></br>
            &emsp;&emsp;        arr[j + 1] = arr[j]; <br></br>
            &emsp;&emsp;        j = j - 1; <br></br>
            &emsp;    } <br></br>
            } <br></br>
            `;
            break;
        case "Bogo":
            info_container.innerHTML ="<b>BogoSort, also known as permutation sort, stupid sort, slow sort, shotgun sort or monkey sort is a particularly ineffective algorithm based on generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted.</b>";
            complexity_container.innerHTML =
            `
            Time: Unbounded <br></br>
            Space: O(1)
            `;
            code_container.innerHTML ="while (!sorted) {<br></br> &emsp; shuffle();<br></br>}"
            break;
        default: 
            info_container.textContent="this is an error. see renderInfo()";
            break;
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}