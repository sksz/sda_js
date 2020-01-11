let array = [12, 55, 7, 54, 22];

function quickSort(array, left, right) {
    var index, left, right;

    if(array.length < 2) {
        return array;
    }

    index = partition(array, left, right);
    if (index - 1 > left) {
        quickSort(array, left, index - 1);
    }

    if (index < right) {
        quickSort(array, index, right);
    }

    return array;
}

function partition (array, left, right) {
    var pivot;
    pivot = array[Math.floor((right + left) / 2)];
    i = left;
    j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(array, leftIndex, rightIndex) {
    var temp;

    temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

console.log(quickSort(array, 0, array.length - 1));