async function insertion(arr) {
    let startTime = performance.now();
    let bars = document.getElementsByClassName("bar");
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            bars[j + 1].style.height = arr[j + 1] * height_multiplier + "px";
            bars[j + 1].style.backgroundColor = color_bar_sorting;
            await sleep(delay_ms);
            bars[j + 1].style.backgroundColor = color_bar_default;
            j = j - 1;
        }
        arr[j + 1] = key;
        bars[j + 1].style.height = arr[j + 1] * height_multiplier + "px";
        bars[j + 1].style.backgroundColor = color_bar_sorting;
        await sleep(delay_ms);
        bars[j + 1].style.backgroundColor = color_bar_default;
    }
    let endTime = performance.now();
    console.log("done in " + (endTime - startTime) + "ms");
  }

