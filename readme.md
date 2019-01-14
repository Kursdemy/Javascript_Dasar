## Everything is Object

Ada 2 type Data :

Primitive
----------
- number
- string
- boolean
- undefined
- null

Object
---------
- Array 
- Function
- Object
- Date

Object Oriented Programing
---------------------------
- Sesama object saling berinteraktif melalui method dan property.
- Menggunakan Store data , structure aplikasi ke dalam module dan keep code clean.


Contoh Object :

    var toyota = {
        nama: "avanza",
        tahun: 2000,
        warna: "putih"
    }

    var suzuki = {
        nama: "apv",
        tahun: 2005,
        warna:"biru",
    }

    var honda = {
        nama: "brio",
        tahun: 2015,
        wana: "merah"
    }

    car = {
        nama
        tahun
        pabrik
        dsb
    }

**Constructor atau Prototype**

Di beberapa languange ini sering disebut class, didalam Javascript disebut Constructor atau Prototype.

Constructor kita bisa membuat banyak instances , contoh nya constructor car bisa membuat object baru misalnya toyota , suzuki , honda , dsb.

## Inheritance (Turunan)

apa turunan dari car ?

    sport = {
        type 
        tahun
        mesin
        ukuran
    }

    family = {
        type 
        tahun
        mesin
        ukuran
    }

    car = {
        nama: "Mitsubishi",
        tahun: 2010 ,
        pabrik: "Sunter" ,
        jenis: barang = {
            type = "solar" ,
            karoseri: "aduhai" ,
            mesin: 2000 ,
            kapasitas: 10 ton
        }
    }

## Constructor Function

function (){ .... }

Kenapa kita membutuhkan constructor function dan pada saat apa ?

karena kita perlu membuat object object baru , pada saat kita membutuhkan new instance - new instance maka kita membutuhkan function constructor , instance atau copy dari blue print dari sebuah object/function/class.

function Motor(){ return object: }

## Membuat constructor function

- Function nama function gunakan huruf besar.
- Lewatkan (pass) parameter.
- Akses parameter dengan **this**.
- Gunakan new keyword untuk invoke/memanggil constructor function.
- Menambahkan value untuk parameter diatas sebagai argumen.
- Gunakan variable invoke untuk menyimpan new object tsb.
- Dengan demikian anda bisa memulai membuat instance baru dengan berbeda value , instance (baca mengcopy).
- Tampilkan pada console.

## DOM
### Document Object Model

