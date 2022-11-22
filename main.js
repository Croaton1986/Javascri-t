console.error("Hey!"); //("Выводит сообщение в консоль в виде уведомления")  

var a = 2;//Задание переменной
var b = 3;
var d = "57" 

c = a + b + Number(d); // Number преобразует строку в число

console.log(c);
// метод Math
console.log(Math.PI)
// console.log("hello"); // Выводит сообщение в консоль
        // тоже самое, что log() // console.info("hello");
        //console.error("Выводит сообщение в консоль в виде ошибки")
        //console.warn("Выводит сообщение в консоль в виде уведомления")      
        
if (c > 100){
    c=100;
} else if (c > 50) {
    c=50;
} else {
    console.log("Yoy");
}

console.log(c);

// Задание массива
var r = [1, 5, "Word", -5];
 // Обращение к элементу массива
 r[3] // нумерация идет с 0
 r.length // выводит длину массива

 // Задание матрицы (массив из массивов)
 var rr= [[3,5,5,5], [5], ["Word"]];

rr[1][2] // обращение к элеиенту матрицы

// switch {case (("Крепёж к стене" = 0) and (@Глубина > 440)) : true; case (("Крепёж к стене" = 0) and (@Глубина > 440)) : true; case (("Крепёж к стене" = 1) and (@Глубина > 440)) : true; case (("Крепёж к стене" = 1) and (@Глубина > 440)) : false; default : true;}

for(var i = 0; i < 10; i++) {
    console.log(i);
}

var j = 0;
while(j < 10){
    console.log(j);
    j++
}

var i = 100;
do {
    console.log(i);
} while (i<50); 

for(var i = 0; i < 2; i++) {
    if (i==2)
        break;
    console.log(i);
}

for(var i = 0; i < 2; i++) {
    if (i%2==0)
        continue; // пропускает один(следующий) шаг цикла
    console.log(i);
}

//alert("hello"); сообщение
//confirm("Hey&"); тоже сообщение но с кнопками ок и отмена, и можно ввернуть true false

//var d = confirm("Hey&");
//console.log(d);

//prompt("ow old are you&", 20); сообщение можно вернуть вводимое число или строку

/*function info(){
    console.log("Hello!");
}
info();

function summ(a,b){
    res = Number(a) + Number(b);
    console.log("Summ "+res);
}

var a = prompt("Input first number");
var b = prompt("Input second number");
summ(a,b); */


/*function onClickbut(a,b){
    var a = prompt("Input first number");
    var b = prompt("Input second number");
    res = Number(a) + Number(b);
    alert("Summ "+res);
}*/

var text = document.getElementById('text');

console.log(text.id);
text.style.color = "red";
text.style.backgroundColor = "red";