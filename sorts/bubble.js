async function bubble(arr) {
    let startTime = performance.now();
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            bars[j].style.backgroundColor = color_bar_sorting;
            bars[j + 1].style.backgroundColor = color_bar_sorting;
            if (arr[j] > arr[j + 1]) {
                // swap array values
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // animate
                bars[j].style.backgroundColor = color_bar_sorting;
                bars[j + 1].style.backgroundColor = color_bar_sorting;
                await sleep(delay_ms);
                bars[j].style.height = arr[j] * height_multiplier + "px";
                bars[j + 1].style.height = arr[j + 1] * height_multiplier + "px";                 
                await sleep(delay_ms);
            } else {
                await sleep(delay_ms);
            }
            bars[j].style.backgroundColor = color_bar_default;
            bars[j + 1].style.backgroundColor = color_bar_default;
        }
    }
    let endTime = performance.now();
    console.log("done in " + (endTime - startTime) + "ms");
}