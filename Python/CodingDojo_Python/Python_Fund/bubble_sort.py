# def bubble_sort(arr):
#     for i in range(len(arr)-1):
#
#             temp = arr[i]
#             arr[i] = arr[i+1]
#             arr[i+1] = temp
#
#     return arr
#
# print bubble_sort([1,2,3,4,5,6,7,8])

# def bubble_sort(lst):
#     for i in range(len(lst)-2):
#
#             if lst[i] > lst[i+1]:
#
#                 temp = lst[i]
#                 lst[i] = lst[i+1]
#                 lst[i+1] = temp
#
#     return lst
#
# print bubble_sort([8,7,6,5,4,3,2,1])


def bubble_sort(lst):

    # walks through the list backwards
    # after first pass, greatest number will be at the end of the list, we dont need to touch this again.
    for i in range(len(lst)-1, 0, -1):

        #walks through the list forwards
        for n in range(i):

            #for each value in the list, if it is greater then the value in front of it, switch them
            if lst[n]>lst[n+1]:

                temp = lst[n]
                lst[n] = lst[n+1]
                lst[n+1] = temp
    return lst

print bubble_sort([3,5,8,7,2,9])
