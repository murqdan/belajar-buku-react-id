// synchronous

// callback

// deklarasi fungsi
// function gretting (user, callback) {
//   callback(`Selamat Pagi ${user}!`)
// }
// pemanggilan fungsi
// gretting('Fuad', (props) => console.log(props)) // Selamat Pagi Fuad!

// function gretting (user, callback) {
//   setTimeout(() => {
//     callback(`Selamat Pagi ${user} !`)
//   }, 2000)
// }
// gretting('Fuad', (props) => console.log(props))
// console.log('Aku yang pertama')

// deklarasi fungsi load
// function load (url, callback) {
//   const xhr = new XMLHttpRequest()
//   xhr.onload = function () {
//     callback(this.responseText)
//   }
//   xhr.open('GET', url, true)
//   xhr.send()
// }
// pemanggilan fungsi
// load('https://jsonplaceholder.typicode.com/todos/1', data => { document.writeln(data) })
// document.writeln('loading ...')

// promise

// deklarasi promise
// const promise = new Promise((resolve, reject) => {
//   const process = true // contoh saja
//   if (process) resolve('Berhasil')
//   else reject('Gagal')
// })
// cara menggunakan promise
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// const promise = new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   xhr.onload = function () {
//     resolve(this.responseText)
//   }
//   xhr.onerror = function () {
//     reject('Network Error')
//   }
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
//   xhr.send()
// })
//   .then((result) => document.writeln(result))
//   .catch((error) => document.writeln(error))
// document.writeln('loading ...')

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => document.writeln(JSON.stringify(json)))
//   .catch((error) => document.writeln(error))
// document.writeln('loading ...')

// Async & Await

// const load = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     document.writeln(JSON.stringify(data))
//   } catch (error) {
//     document.writeln(error) // contoh error : TypeError: Failed to fetch
//   }
// }
// load()
// document.writeln('loading ...')
