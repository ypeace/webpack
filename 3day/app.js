//import 'babel-polyfill'//之前没有的方法就给放到全局下面

let func = () =>{ };

const NUM = 45;

let arr = [1,2,4];

let arrB = arr.map(item => item*2);

arr.includes(8);

console.log('new Set(arrB)',new Set(arrB));

function* func(){

}