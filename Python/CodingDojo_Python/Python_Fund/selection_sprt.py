
def selection_sort(arr):
    for x in range(len(arr)-1, 0, -1):
        max = None
        for i in range(1, x+1):
            if arr[i] > max:
                max = arr[i]
    temp = arr[x]
    arr[x] = max
    arr[arr.index(max)] = temp
    return arr

print selection_sort([5,4,3,2,1])
