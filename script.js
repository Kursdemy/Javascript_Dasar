// console.log("Hello World !!")

document.getElementById('heading').innerHTML = "Hello, World!"

//*---------------------------------------------------------------*//

//* variable

// var name = "Budi";
// console.log(name);

// var lastname = "Saputra";
// console.log (lastname);

// var age = 26;
// console.log(age);

// var fullname = name + ' ' + lastname ;
// console.log (fullname);

// var fullname = true ;
// console.log (fullname);

// var job = "Trainer";
// console.log (job);

// var bio = "Nama Saya" + " " + name + " " + lastname + " Umur saya " + age + " " + "Pekerjaan saya adalah" + " " + job ;
// console.log (bio);

//*---------------------------------------------------------------*//

//* Operator

// var x = 5;
// var y = 7;
// var z = x + y ;
// console.log(z);

// var x = 5 ;
// var y = 7 ;
// var z = x * y ;
// console.log(z);

// macam-macam Operator aritmetik

// +
// -
// /
// %
// ++ --> increment
// -- --> decrement

// assigment operator

// Operator    Contoh      Sama seperti
// =           x = y       x = y
// +=          x += y      x = x + y
// -=          x -= y      x = x - y
// *=          x *= y      x = x * y
// /=          x /= y      x = x / y
// %=          x %= y      x = x % y

// var x = 10;
// x += 5;
// console.log(x);


// String Operator

// text1 = "Budi";
// text2 = "Saputra";
// text3 = text1 + " " + text2;
// console.log(text3);

// x = 5 + 5 ;
// y = "5" + 5 ;
// z = "Hello" + 5 ;
// console.log(x);
// console.log(y);
// console.log(z);

// comparison Operator

// ==      equal to (value)
// ===     equal value and equal type
// !=      not equal
// !==     not equal value atau not equal type
// >       greather than
// <       less than
// >=      greather than atau equal to
// <=      less than atau equal
// ?       ternary operator


// logical operator

// &&      logical and
// ||      logical or
// !       logical not

// Type operator

// typeof              return --> tipe
// instanceof          return --> bolean

// Bitwise

// & | ~ ^ << >> >>>

//*---------------------------------------------------------------*//

//* if else statement

// var name = "Brandon";
// var age = 16;
// var isYoung = "Yes";

// if (isYoung == 'No') {
//     console.log(name + " " + "Is Young man")
// } else {
//     console.log("I hope he mature soon")
// }

// var hour = 18 ;
// if (hour < 18) {
//     console.log('say yes!')
// } else {
//     console.log('say Nop !!')
// }

// var time = 20;
// if (time < 10) {
//     console.log("Say no way !!")
// } else if ( time <= 20 ) {
//     console.log("say maybe yes")
// } else {
//     console.log("Good on you !")
// }

//*---------------------------------------------------------------*//

//* TYPE DATA *//

/* TYPE DATA PRIMITIF  (not subject) */

// * Number     : float, decimal, integer.
// * String     : Charackter, text.
// * Boolean    : Logical 2 nilai saja true dan false.
// * Undefined  : Variable belum memiliki nilai.
// * Null       : non- existent, memiliki nilai, yakni null.

//*---------------------------------------------------------------*//

/* BOOLEAN */

// Yes or No
// On or Off
// True or False

// Boolean(10 > 9)
// console.log(Boolean(10 > 9));
// console.log(Boolean(10 > 19));

// Comparison dan Condition

// ==       equal               ---> if (day == 'senin')
// >        greater than        ---> if (gaji > 1.000.000)
// <        less than           ---> if (age < 18)

// Everything Without a "value" is True

// console.log(Boolean(100));
// console.log(Boolean(3.14));
// console.log(Boolean(-15));
// console.log(Boolean("Hello"));
// console.log(Boolean("false"));

// console.log(Boolean(false));
// console.log(Boolean(true));

// Everything Without a "value" is false

// var x = 0 ;
// console.log(Boolean(x));

// var y = "";
// console.log(Boolean(y));

// var z = "NaN";
// console.log(Boolean(z));

// Tools  Debuggin JS 

// * console.log()
// * alert()
// * prompt()

// var z = "NaN";
// alert(Boolean(z));

prompt("What is Your Name");

