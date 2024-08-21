// 1.VARIABLE JAVASCRIPT VERSI LAMA
var nama = "Raif"
// LET ADALAH VARIABLE YANG DAPA DIGANTI NILAINYA
let usia = "100"
// CONST ADALAH VARIABLE YANG TIDAK DAPAT DDIGANTI NILAINYA
const harga = 2000

usia=50
// CONSOLE LOG BERFUNGSI UNTUK MENAMPILKAN OUTPOT PADA BROWSER
console.log(nama) 
console.log(usia)
console.log(harga)
 
// 2. TIPE DATA
// string
let namaLengkap = "Naufal Raif"
let hobi = 'game'

console.log(namaLengkap,hobi)

// NUMBER
let hargaBarang = 3000
let jumlahBeli = 5

console.log("Total : " + (hargaBarang * jumlahBeli))    

// BOOLEAN
let is_authenthicated = true

if(is_authenthicated) {
    console.log("Kamu sudah login")
} else {
    console.log("Kamu belum Login")
}

// ARRAY
let mahasiswa = ["Aca", "Rasya", "Rian", "Raif"]

console.log(mahasiswa)
console.log(mahasiswa[3])
console.log("Jumlah Mahasiswa Kampus A : " + mahasiswa.length)

console.log("Mahasiswa Kampus A")
for (let i = 0; i <mahasiswa.length; i++) {
    console.log(i + 1 + ". " + mahasiswa[i] )
}

// Object
let Rasya = {
    nama: "Rasya",
    usia: "17",
    jurusan: "Teknik Rpl",
    alamat: "Jl.Margono",
    is_married: "false",
    hobi: ["Nonton film", "membaca", "Menyanyi",]
}

console.log(Rasya)
console.log("Nama : " + Rasya.nama)
console.log("Usia : " + Rasya.usia)
console.log("Hobi : " + Rasya.hobi)
console.log("Jurusan : " + Rasya.jurusan)
console.log(`Jurusan :  ${Rasya.jurusan}`)

// 3. pengkondisian

// if dan else
let nilai_saya = 45
let kkm = 80

if (nilai_saya >= kkm) {
    console.log("Kamu Lulus")
} else {
    console.log("Kamu Tidak Lulus")
}

// else if
let nilai = 84

if(nilai >= 90) {
    console.log("Grade A")
} else if (nilai >= 75) {
    console.log("Grade B") 
} else if (nilai >= 65) {
    console.log("Grade C") 
} else if (nilai >= 55) {
    console.log("Grade D") 
} else if (nilai >= 45) {
    console.log("Grade E")
} else {
    console.log("Grade E")
}

// Switch
let status_bayar = "paid" 

switch (status_bayar) {
    case "paid":
        console.log("Lunas")
        break
    case "unpaid":
        console.log("Belum Lunas")
        break
    case "Pending":
        console.log("Menunggu Konfirmasi")
        break
    default:
    console.log("tidak Terdefinisi")
}

// LOOPING 

// FOr
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// while
let i = 0

while (i < 10) {
    console.log(i)
    i++
}

// do while 
let j = 0

do {
    console.log(j)
    j++
} while (j < 10)


