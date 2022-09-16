async function bogo(arr) { // todo final state is all colored, unlike other sorts
    let startTime = performance.now();
    let bars = document.getElementsByClassName("bar");
    // note: async functions are not reliable for boolean operations
    // they will default to true until function complete
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let j = 0; j < arr.length - 1; j++) {
            await sleep(delay_ms);
            bars[j].style.backgroundColor = color_bar_sorting;
            if (arr[j] > arr[j + 1]) {
                bars[j+1].style.backgroundColor = color_bar_wrong;
                await sleep(delay_ms * 4);
                for (let k = 0; k < j + 1 + 1; k++) {
                    bars[k].style.backgroundColor = color_bar_default;
                }
                sorted = false;
                break;
            }
        }
        if (sorted) {
            bars[bars.length-1].style.backgroundColor = color_bar_sorting;
        } else {
            let shuffled = [];
            let rand;
            while (arr.length !== 0) {
                rand = Math.floor(Math.random() * arr.length)
                shuffled.push(arr.splice(rand, 1)[0]);
            }
            await sleep(delay_ms);
            for (let i = 0; i < shuffled.length; i++) {
                bars[i].style.height = shuffled[i] * height_multiplier + "px";
            }
            arr = shuffled;
        }
    } 
    let endTime = performance.now();
    console.log("done in " + (endTime - startTime) + "ms");
}
