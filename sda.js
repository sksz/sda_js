let arr = [12, 55, 7];

function insertSort(arr) {
    var element, i;
    for(i = 0; i < arr.length; i++) {
        element = arr[i];

        if(arr[i] > arr[i - 1]) {
            continue;
        } else {
            var j;
            for(j = i - 1; j >= 0 && arr[j] > element; j--) {
                arr[j + 1] = arr[j];
            }

            arr[j + 1] = element;
        }
    }

    return arr;
}

console.log(insertSort(arr));