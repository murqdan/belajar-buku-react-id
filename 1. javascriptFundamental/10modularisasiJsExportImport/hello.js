// hello.js

// export function hello (user) {
//   alert(`Hello, ${user}!`)
// }

// Jika kita hanya mengkespor satu variabel/function per module, maka kita bisa menggunakan keyword default.
export default function hello (user) {
  alert(`Hello, ${user}!`)
}
