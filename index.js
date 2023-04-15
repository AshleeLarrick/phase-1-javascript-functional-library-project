function myEach(collection, callback) {
    let array = collection
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    for(const element of array) {
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    let array = collection
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    let  return_value = []
    for(const element of array) {
        return_value.push(callback(element))
    }
    return return_value
} 

function myReduce(collection, callback, acc=0) {
    let array = collection
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    let value = acc;
    if(acc == 0) {
        value = array[0]
    }
    let index = 0
    for(let i = 0; i < array.length; i++) {
        if(index == 0 && acc == 0) {
            index +=1
            continue
        }
      let currentValue = array[i]
      value = callback(value, currentValue, array)
    }
    return value
}

function myFind(collection, predicate) {
    let array = collection
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    for(const element of array) {
        if(predicate(element) == true) {
            return element
        }
    }
}
function myFilter(collection, predicate) {
    let array = collection
    let return_value = []
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    for(const element of array) {
        if(predicate(element) == true) {
            return_value.push(element)
        }
    }
    return return_value
}
function mySize(collection) {
    let array = collection
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    let length = 0
    for(const element of array) {
        length +=1
    }
    return  length
}
function myFirst(collection, n=0) {
    let array = collection
    let return_value = []
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    let length = 0
    if(n==0){
        return array[0]
    }
    for(const element of array) {
        if(n == length) {
            return return_value
        }
        else {
            return_value.push(element)
        }
        length +=1
    }
    return return_value
}

function myLast(collection, n=0) {
    let array = collection
    let return_value = []
    if(typeof collection === 'object') {
        array = Object.values(collection)
    }
    let length = 0
    if(n==0){
        return array[mySize(array)-1]
    }
    for (var i = array.length - 1; i >= 0; i--) {
        if(n == length) {
            return return_value.reverse()
        }
        else {
            return_value.push(array[i])
        }
        length +=1
    }
    return return_value
}

function myValues(object) {
    let arr = []
    for(const key in object) {
        arr.push(object[key])
    }
    return arr
}
function myKeys(object) {
    let arr = []
    for(const key in object) {
        arr.push(key)
    }
    return arr
}