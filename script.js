// console.log("Hello World !!")

// document.getElementById('heading').innerHTML = "Hello, World!"

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

// var name = prompt("What is Your Name");
// alert(name);


//*---------------------------------------------------------------*//

//* Switch Condition

// var job = 'Trainer';
// job = prompt('Apa profesi si Budi ?');

// switch (job) {
//     case 'Trainer':
//         console.log('Budi adalah seorang Trainer');
//         break;
//     case 'Driver':
//         console.log('Dyo bukan seorang Driver');
//         break;
//     case 'Polisi':
//         console.log('Polisi itu mengejar Penjahat');
//         break;
//     default:
//         console.log('Budi bukan Driver dan polisi');
// }

// var job = 'Penjahit';
// switch (job) {
//     case 'Trainer':
//         console.log('Budi adalah Seorang Trainer');
//         break;
//     case 'Diver' :
//         console.log('Budi bukan seorang Driver');
//         break;
//     case 'Polisi':
//         console.log('Polisi itu mengejar penjahat');
//         break;
//     default :
//         console.log('Budi Bukan Siapa - Siapa');
// }



//*---------------------------------------------------------------*//


//* Javascript Function *//

//* Function adalah Aspek yang penting dalam Javascript dan bahasa programing yang lain .
//* Block of Code, Untuk menjalankan task khusus dalam programing.
//* Function akan tereksekusi apabila dipanggil (call).
//* Function dibuat untuk mengurangi penulisan code secara berulang-ulang, mengembalikan return.

//  DRY = Do not Repeat Your self;

// Contoh penulisan function 

// function xxx (argument) {
//  .....    
//}
//xxx();

// function yo() {
//     console.log('Yo !!!!')
// }
// yo();

// function yo(name) {
//     console.log(name)
// }
// yo("Budi Saputra");

// var name = "Brandon"
// function yo() {
//     console.log(name)
// }
// yo(name);

// function yo(name, age) {
//     console.log(name + " " + age)
// }
// yo("Budi", 22);
// yo("Reni", 20);
// yo("Ari", 18);


// function tambah(satu, dua) {
//     return satu + dua;
// }
//     console.log(tambah(5, 10));

// Function dengan Condition if

// function yo(name, age) {
//     if (age > 35) {
//         return name + ', not that old';
//     } else {
//         return name + ', is still young';
//     }
// }
// var nama = yo('Budi', 22);
// console.log(nama);

// function coba(a, b) {
//     return a + b ;
// }
// var cobi = coba("Budi",  " is Cool !");
// console.log(cobi);
// document.getElementById("element1").innerHTML = cobi;
// alert(cobi);

// Function dengan Condition if

// function yo(name, age) {
//     if (age > 35) {
//         return name + ', not that old !';
//     } else {
//         return name + ', is still young ';
//     }
// }
// var nama = yo('Budi', 22);
// console.log(nama);

// function coba(a, b) {
//     return a + b;
// }
// var cobi = coba("Budi", " is cool ");
// console.log(cobi);
// document.getElementById("element1").innerHTML = cobi ;
// alert(cobi);

/*---------------------------------------------------------------
Statement dan Expression di dalam Javascript
---------------------------------------------------------------*/

// Statement
// function myfunc() {
//     // code
// }

// Statement
// if (x === 5) {
//     // do something here
// }

/* Expression */
// 3 + 4 ;
// var x = 3;

/*---------------------------------------------------------------
Javascript Arrays
---------------------------------------------------------------*/

// var name = "Budi";
// var lastname = "Saputra";

// var names = ["Budi", "Saputra", 1996, "Developer"];

/* cara akses sebuha array */

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);

// /* mutation */
// names[1] = "Gila";
// console.log(names);

// /* push */
// names.push("Setres");
// console.log(names[4]);

// /* Unshift */
// names.unshift("Mr");
// console.log(names);

/* pop */
// names.pop();

/* Shift */
// names.shift();

/*---------------------------------------------------------------
Javascript Object
---------------------------------------------------------------*/

// var car = {
//     color: "blue",
//     year: 2018,
//     drive: function(){return "drive"}
// };

// var shopList = [
//     "Apple",
//     "Orange",
//     "Pear"
// ];

/*---------------------------------------------------------------
Menyisipkan Array dan Object
---------------------------------------------------------------*/

// var car = {
//     made: "Honda",
//     speed: 160,
//     enggine: {
//         size: 2.5,
//         made: "Daihatsu",
//         fuel: "Pertamax",
//         piston: [
//             "2018",
//             {make: "China"},
//             {make: ""}
//         ],
//     },
//     drive: function(){ return "drive";}
// };

// var array = [
//     "String",
//     1000,
//     [true, 100],
//     {name: "Budi"},
//     function() { return "drive";}
// ];

/*---------------------------------------------------------------
Mengakses Array dan Object
---------------------------------------------------------------*/

// var car = {
//     made: "Honda",
//     speed: 160,
//     engine: {
//         size: 2.5,
//         made: "Daihatsu",
//         fuel: "Pertamax",
//         piston: [
//             "2018",
//             {make: "China"},
//             {make: ""}
//         ],
//     },
//     drive: function(){ return "drive";}
// };

// var array = [
//     "String",
//     1000,
//     [true, 100],
//     {name: "Budi"},
//     function() { return "drive";}
// ];

// console.log(car);
// console.log(car.made);
// console.log(car.enggine);

/*---------------------------------------------------------------
Create , Asign & Delete member Array dan Object
---------------------------------------------------------------*/

// var car = {
//     made: "Honda",
//     speed: 160,
//     engine: {
//         size: 2.5,
//         made: "Daihatsu",
//         fuel: "Pertamax",
//         piston: [
//             "2018",
//             {make: "China"},
//             {make: ""}
//         ],
//     },
//     drive: function(){ return "drive";}
// };

// var array = [
//     "String",
//     1000,
//     [true, 100],
//     {name: "Budi"},
//     function() { return "drive";}
// ];

// console.log(car);
// console.log(car.made);
// console.log(car.enggine);

/*---------------------------------------------------------------
Modifikasi Array
---------------------------------------------------------------*/

// var array = [
//     "String",
//     1000,
//     [true, 100],
//     {name: "Budi"},
//     function() { return "drive";}
// ];

// array
// (5) ["String", 1000, Array(2), {…}, ƒ]
// array[0]
// "String"
// array[1]
// 1000
// array[2]
// (2) [true, 100]
// array[0] = "Strong" 
// "Strong"
// array
// (5) ["Strong", 1000, Array(2), {…}, ƒ]
// array[1] = "Seribu"
// "Seribu"
// array
// (5) ["Strong", "Seribu", Array(2), {…}, ƒ]

/* Prebuilt Method */

// ** Shift --> Menghapus Element pertama Array

// array
// (5) ["String", 1000, Array(2), {…}, ƒ]
// array.shift
// ƒ shift() { [native code] }
// array.shift()
// "String"
// array
// (4) [1000, Array(2), {…}, ƒ]

// **  pop --> untuk menghapus element terakhir pada array 

// array
// (5) ["String", 1000, Array(2), {…}, ƒ]
// 0: "String"
// 1: 1000
// 2: (2) [true, 100]
// 3: {name: "Budi"}
// length: 4
// __proto__: Array(0)
// array.pop()
// ƒ () { return "drive";}
// array
// (4) ["String", 1000, Array(2), {…}]
// 0: "String"
// 1: 1000
// 2: (2) [true, 100]
// 3: {name: "Budi"}
// length: 4
// __proto__: Array(0)

// ** unshift --> Menambahkan element pertama pada Array

// array
// (5) ["String", 1000, Array(2), {…}, ƒ]
// 0: "String"
// 1: 1000
// 2: (2) [true, 100]
// 3: {name: "Budi"}
// 4: ƒ ()
// length: 5
// __proto__: Array(0)
// array.unshift("function" , "tambah baru")
// 7
// array
// (7) ["function", "tambah baru", "String", 1000, Array(2), {…}, ƒ]
// 0: "function"
// 1: "tambah baru"
// 2: "String"
// 3: 1000
// 4: (2) [true, 100]
// 5: {name: "Budi"}
// 6: ƒ ()
// length: 7
// __proto__: Array(0)

// ** push --> Menambahkan element pada urutan akhir Array

// array
// (5) ["String", 1000, Array(2), {…}, ƒ]
// array.push("car", 70)
// 7
// array
// (7) ["String", 1000, Array(2), {…}, ƒ, "car", 70]

// ** splice() menambahkan , mengurangi

// 1.Menghapus element
// array.splice(2,2);
// 2 ---> menghapus element mulai dari index ke 2
// 2 ---> jumlah element yang akan di hapus start dari index ke 2

// 2.Menambah element diantara element yang ada 
//array.splice(1, 0, "Hello", "World", 2018)
// 1 ---> menambah element mulai dari index ke 1
// 0 ---> jumlah element yang akan dihapus.
// "Hello", "World", 2018 ---> Element yang ditambahkan

// 3.Merubah dan menghapus Element Array

// array = [
//     "Selamat",
//     "Pagi",
//     900,
//     true,
//     12.5
// ]

// array.splice(2,2, 2018, "Budi")

/*---------------------------------------------------------------
Javascript Loops
---------------------------------------------------------------*/

// loops adalah pengulangan ( iteration )

// loop sangat penting dalam sebuah programing karena menghemat waktu dan tenaga , ketimbang menulis program ber ulang ulang untuk sebuah task tertentu , lebih baik membuat kode instruktur pengulangan (Metode loop), sehingga program akan melakukan tugas berulang-ulang hingga syarat yang diinginkan seorang program terpenuhi.Metode

// contoh : kita ingin menuliskan number 0 hingga 10 , dibandingkan kita menulis manual:

// 1
// 2
// 3
// ...

// kita gunakan for loop 

// for (var i){

// }

// kita ingin mencetak pengulangan mulai dari 0,maka

// for (var i=0;){

// }

// jika i lebih kecil dari 11 , maka terus tambahkan secara otomatis i tersebut hingga 1 < 11 , yakni 10,

// for (var i=0; i < 11; i++){

// }

// ---> Pinsip Start , kondisi , Aksi tambah / kurang

// tampilkan lah hasilnya di console:

// for (var i=0; i < 11; i++){
//     console.log(i)
// }

// Keterangan hasilnya 
// i=0 ---> start dari 0
// i=1 ---> i<11 ---> i++
// i=2 ---> i<11 ---> i++ dst
// i++ --> Penambahan 
// Artinya : 
// i = 1 + 1

// var i;
// for (i=0; i < 11; i++){
//     console.log(i)
// }

// var family = [
//     "Ayah",
//     "Ibu",
//     "Kakak",
//     "Adik",
//     "Nenek"
// ]

// var i;
// for (i=0; i < family.length; i++){
//     console.log(family[i]);
// }

// var i;
// for (i = family.length-1; i >= 0;  i--) {
//     console.log(family[i]);
// }

/* Javascipt while loops */

// var i = 0 ;
// while (i < family.length){
//     console.log(family[i]);
//     i++;
// }

// for (var i=1; i<=10; i++) {
//     console.log(i);

//     if (i === 3) {
//         break;
//     }
// }

// for (var i = 1; i <= 10; i++){
//     if (i === 3){
//         continue;
//     }
//     console.log(i);
// }



/*---------------------------------------------------------------
Function constructor 
---------------------------------------------------------------*/

// function Car (nama, tahun, x, y) {
//     this.nama = nama;
//     this.tahun = tahun;
//     this.x = x;
//     this.y = y;
// }

// var car1 = new Car("Honda", 2010, 20, 5);
// var car2 = new Car("Suzuki", 2011, 25, 10);
// var car3 = new Car("Toyota", 2012, 30, 15);

