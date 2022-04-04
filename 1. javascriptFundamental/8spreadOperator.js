// ... (pada array, string, dan objek)

// string
// let teks = 'Belajar Javascript'
// console.log(teks) // Belajar Javascript
// console.log(...teks) // B e l a j a r   J a v a s c r i p t
// array
// let menus = ['Bakso', 'Sate', 'Gado-gado']
// console.log(menus) // [ 'Bakso', 'Sate', 'Gado-gado' ]
// console.log(...menus) // Bakso Sate Gado-gado

// function hitung (a, b, c) {
//   return a + b + c
// }
// const bilangan = [2, 3, 4]
// console.log(hitung(...bilangan))// 9

// menggunakan spread operator
// const arrSpread = [...arr1, ...arr2]
// console.log(arrSpread) // [ 0, 1, 2, 3, 4, 5 ]
// let numbers1 = ['tiga', 'empat'];
// let numbers2 = ['satu', 'dua', ...numbers1, 'lima'];
// console.log( numbers2 ); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]

// object
// const user = { username: 'alex88', email: 'alex88@gmail.com' };
// const profile = { name: 'Alexander', city: 'Moscow' };
// const userProfile = { ...user, ...profile };
// console.log(userProfile);
/*
{
  username: 'alex88',
  email: 'alex88@gmail.com',
  name: 'Alexander',
  city: 'Moscow'
}
*/
// mencopy array ke variabel lain
// spread operator
// const user = { name: 'Andi' }
// const copyUser2 = { ...user }
// console.log(copyUser2)
