// berfungsi memecah item atau properti dari sebuah array atau objek ke dalam variabel yang berbeda.

// array destructuring
// const colors = ['merah', 'kuning', 'hijau']
// const [satu, dua, tiga] = colors
// console.log(satu) // merah
// console.log(dua) // kuning
// console.log(tiga) // hijau

// const colors = ['merah', 'kuning', 'hijau']
// const [satu, dua] = colors
// console.log(dua) // kuning
/* const colors = ['merah', 'kuning', 'hijau']
let [satu, , tiga] = colors
console.log(tiga) // hijau */
/* const colors = ['merah', 'kuning', 'hijau']
const [satu, dua, tiga, empat = 'biru'] = colors
console.log(empat) // biru
*/

// object destructuring
// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// }
// const { name, gender, age } = user
// console.log(name) // Melodi
// console.log(gender) // 0
// console.log(age) // 24

// let name, gender, age
// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// };
// jika variabel telah dideklarasikan sebelumnya maka gunakan tanda kurung ()
// ({ name, gender, age } = user)
// console.log(name) // Budi
// console.log(gender) // Budi
// console.log(age) // 20

// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// }
// object destructuring
// const { name } = user
// console.log(name) // Melodi

// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// }
// const { name, born = 'Paris' } = user // nilai default
// console.log(name + ' lahir di ' + born) // Melodi lahir di Paris

// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// }
// const print = ({ name, gender, age }) => {
//   console.log(name + ' umurnya ' + age + ' tahun')
// }
// print(user) // Melodi umurnya 24 tahun

// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// }
// const { name: nama, age: umur } = user
// console.log(nama) // Melodi
// console.log(umur) // 24

// Kombinasi Array & Object Destructuring

// const users = [
//   { id: 1, name: 'Anwar' },
//   { id: 2, name: 'Doni' },
//   { id: 3, name: 'Mila' }
// ]
// const [,, { name }] = users
// console.log(name) // Mila

// Kombinasi Destructuring Assignment & Spread Operator (= rest operator)

// const colors = ['merah', 'kuning', 'hijau']
// const [satu, ...lainnya] = colors
// console.log(satu) // merah
// console.log(lainnya) // [ 'kuning', 'hijau' ]

// const user = {
//   name: 'Melodi',
//   gender: 0,
//   age: 24
// }
// const { name, ...lainnya } = user
// console.log(name) // Melodi
// console.log(lainnya) // { gender: 0, age: 24 }
