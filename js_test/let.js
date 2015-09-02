"use strict";  //使用严格模式
{
	var a=1;
	let b=2;
	console.log(a);
	console.log(b);
}


for (var i = 0, a=[]; i < 10; i++) {
	var c = i;
	a[i] = function () {
		console.log(c);
	};
}
a[0](); // 9

for (var i = 0, b=[]; i < 10; i++) {
	let c = i;  //使用let解决变量提升问题
	b[i] = function () {
		console.log(c);
	};
}
b[0](); // 0



{
	const i = 1;
}
console.log(typeof i);  //undefined
{
	const a = 123;
	//a = 567;   //报错，a是常量不能修改
}





function f() { console.log('outside!'); }
(function () {
 if(false) {
 // 重复声明一次函数f
 function f() { console.log('inside!'); }
 }

 f();
 //严格模式(ES6)下输出outside；非严格模式(ES5)输出inside
 }());







