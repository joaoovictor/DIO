const num2 = {
    value: 2,
}

const num3 = {
    value: 5,
}

function mapComThis(arr, thisArg){

    return arr.map(function(item){
       return item * this.value
    }, thisArg)
}


const array = [10, 20, 30]


console.log('this -> num2 ', mapComThis(array, num2))
console.log('this -> num3 ', mapComThis(array, num3))