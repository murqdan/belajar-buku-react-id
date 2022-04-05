// Mengenal Functional Programming

/* Apakah jika kode program kita menggunakan function maka itu pasti disebut sebagai functional programming?
ternyata tidak, paradigma ini mensyaratkan penggunaan pure function sebisa mungkin. */
/* Pure function adalah fungsi biasa yang memiliki kriteria sebagai berikut: */
/* Fungsi harus selalu memberikan nilai balik yang sama untuk argumen atau parameter yang sama.
Termasuk juga, fungsi tidak boleh bergantung pada mutable variabel (let) diluar fungsi */
/* Fungsi tidak boleh memiliki side efek yang lain. Contoh side efek adalah: penulisan log,
modifikasi mutable objek, re-assign sebuah variabel, dll. */
/* Dan functional programming itu sebisa mungkin menggunakan declarative pattern. */
/* function multiply (x, y) {
  return x * y
} */

/* First-class Function */
/* First-class function maksudnya adalah menjadikan fungsi layaknya class atau dalam hal ini kita
bisa mendeklarasikan fungsi di dalam fungsi yang lain. */
/* function HitungLingkaran (radius) {
  const pi = 22 / 7
  const luas = (r) => pi * r * r // fungsi
  const keliling = (r) => 2 * pi * r // fungsi
  console.log(`Luas: ${luas(radius)}`)
  console.log(`Keliling: ${keliling(radius)}`)
}
HitungLingkaran(7) */ // Luas: 154, Keliling: 44

/* High Order Function */
/* fungsi yang menerima fungsi lain sebagai argumen dan mengembalikan fungsi */
/* const luas = (r) => 22 / 7 * r * r
const lebar = (r) => 2 * 22 / 7 * r
const hitung = (fn) => (...arg) => fn(...arg)
const hitungLuas = hitung(luas)
const hitungLebar = hitung(lebar)
console.log(hitungLuas(7))
console.log(hitungLebar(7)) */

/* Function Composition/Compose Function */
/* Salah satu karakteristik dari functional programming adalah adanya function composition. */
/* Function composition adalah mengkombinasikan beberapa fungsi menjadi fungsi tunggal. */
/* const users = [
  { name: 'Alex', age: 30 },
  { name: 'Dora', age: 12 },
  { name: 'Xinux', age: 25 }
]
const getAdult = (users) => users.filter(user => user.age > 17)
const getName = (users) => users.map(user => user.name)
const composer = (...funcs) => initialArg => funcs.reduceRight((acc, func) => func(acc), initialArg)
const getNameAdult = composer(getName, getAdult)
console.log(getNameAdult(users)) */ // [ 'Alex', 'Xinux' ]

/* Currying Function */
/* Teknik untuk mengubah bentuk suatu fungsi dengan beberapa argumen menjadi sebuah fungsi anak yang berurutan. */
/* Fungsi currying akan mengembalikan fungsi baru yang sesuai dengan argumen berikutnya. */
/* const tambah = (a, b) => a + b
tambah(2, 5) // 7
const tambah = a => b => a + b
tambah(2)(5) // 7 (currying function) */
/* simulasi untuk komputasi berat
const getGreeting = () => {
  let x = 0
  for (let i = 0; i < 1000000000; i++) {
    x += i
  }
  return 'Selamat pagi'
}
ubah menjadi bentuk currying
const say = (callback) => {
  const greeting = callback()
  return (name) => {
    console.log(`${greeting} ${name}`)
  }
}
const users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']
// say(getGreeting)(users[0])
// say(getGreeting)(users[1])
const sayGretting = say(getGreeting) // jalankan dulu
users.map(user => sayGretting(user)) */

/* Declarative vs Imperative Pattern */
/* Terdapat dua pattern atau pola ketika membuat kode program yaitu: */
/* -Imperative berfokus pada gambaran bagaimana suatu program beroperasi, ada step by stepnya.
-Deklarative berfokus pada apa yang harus dicapai oleh program tanpa menjabarkan step by stepnya. */
/* const products = [
  { id: 1, name: 'buku', qty: 7, price: 7000 },
  { id: 2, name: 'pensil', qty: 2, price: 4000 },
  { id: 3, name: 'rautan', qty: 1, price: 2000 },
  { id: 4, name: 'bulpoin', qty: 10, price: 2000 },
  { id: 5, name: 'penggaris', qty: 2, price: 2000 }
]
const restock = [] //Imperative Pattern
for (let i = 0; i < products.length; i++) {
  if (products[i].qty < 5) {
    restock.push(products[i])
  }
}
console.log(restock) */
// [
//     { id: 2, name: 'pensil', qty: 2, price: 4000 },
//     { id: 3, name: 'rautan', qty: 1, price: 2000 },
//     { id: 5, name: 'penggaris', qty: 2, price: 2000 }
// ]
/* const products = [
  { id: 1, name: 'buku', qty: 7, price: 7000 },
  { id: 2, name: 'pensil', qty: 2, price: 4000 },
  { id: 3, name: 'rautan', qty: 1, price: 2000 },
  { id: 4, name: 'bulpoin', qty: 10, price: 2000 },
  { id: 5, name: 'penggaris', qty: 2, price: 2000 }
]
function isRestock (qty) { // Declarative Pattern
  return qty < 5
}
const restock = products.filter((item) => { // Declarative Pattern
  return isRestock(item.qty)
})
console.log(restock) */
//   [
//     { id: 2, name: 'pensil', qty: 2, price: 4000 },
//     { id: 3, name: 'rautan', qty: 1, price: 2000 },
//     { id: 5, name: 'penggaris', qty: 2, price: 2000 }
//   ]
