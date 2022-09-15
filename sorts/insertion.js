async function insertionSort(array) {
    let startTime = performance.now();
    let bars = document.getElementsByClassName("bar");
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = array[j + 1] * height_multiplier + "px";
            bars[j + 1].style.backgroundColor = "green";
            await sleep(delay_ms);
            bars[j + 1].style.backgroundColor = "black";
            j = j - 1;
        }
        array[j + 1] = key;
        bars[j + 1].style.height = array[j + 1] * height_multiplier + "px";
        bars[j + 1].style.backgroundColor = "green";
        await sleep(delay_ms);
        bars[j + 1].style.backgroundColor = "black";
    }
    let endTime = performance.now();
    console.log("done in " + (endTime - startTime) + "ms");
  }

