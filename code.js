function permutationSort(arr, queue = [], len = arr.length, iters = [0]) {
	
    let newArr = []

    if (arr.length <= 1) {
        iters[0]++
        queue.push(arr[0])
        return iters[0]
    }
    for (let i = 0; i < arr.length; i++) {
        queue.push(arr[i])
        newArr = arr.slice(0,i).concat(arr.slice(i+1, arr.length))
        permutationSort(newArr, queue, len, iters)
        if (queue.length == len) {
            if (testSort(queue))
                return iters[0]
            queue.pop()
        }
        queue.pop()
    }
}

// used to test if given array is sorted in ascending order
function testSort(arr) {
    flag = true
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i])
            flag = false
    }
    return flag
}
