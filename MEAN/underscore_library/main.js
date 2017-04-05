var _ = {
    filter: function(arr, callback){
        var newArr = [];
        for (i in arr){
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr
    },
    reject: function(arr, callback){
        var newArr = [];
        for (i in arr){
            if (!callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr
    },
    find: function(arr, callback){
        for (i in arr) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },
    map: function(arr, callback) {
        for (i in arr) {
            arr[i] = callback(arr[i]);
        }
        return arr
    }
}
