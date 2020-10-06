let arr = [];

while (true) {

    let value = prompt("Введите элементы массива", 0);

    if (value === "" || value === null) break;

    arr.push(+value);
}
console.log(arr);


for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

console.log(arr);




console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));


function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr);