// var, let, const
// arrow function (this)

// function multiply (a, b) {
//   return a * b
// }
// const multiply = (a, b) => a * b

// const Web = {
//   teks: 'hello',
//   render: function () {
//     console.log('menampilkan: ' + this.teks)
//   }
// }

// console.log(Web.teks) // hello
// Web.render() // menampilkan: hello

// const Web = {
//   teks: 'hello',
//   render: function () {
//     setTimeout(function () {
//       console.log('menampilkan: ' + this.teks)
//     }, 1000)
//   }
// }

// console.log(Web.teks)
// Web.render()

// const Web = {
//   teks: 'hello',
//   render: function () {
//     setTimeout(function () {
//       console.log('menampilkan: ' + this.teks)
//     }.bind(this), 1000)
//   }
// }

// const Web = {
//   teks: 'hello',
//   render: function () {
//     setTimeout(() => console.log('menampilkan: ' + this.teks), 1000)
//   }
// }
// console.log(Web.teks)
// Web.render()
