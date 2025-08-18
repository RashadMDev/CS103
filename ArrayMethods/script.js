// const arr4 = Array.from('hello');
// console.log(arr4);


// const fruits = ['alma', 'armud', 'asd12312312', 'asdasda', 12312, 12312, 12312, "alma", "alma"];
// fruits.pop()
// console.log(fruits.pop());


// fruits.push("banan")
// console.log(fruits);

// fruits.unshift("uzum")

// fruits.splice(0, 4)\

// console.log(fruits.includes("asdasdaasdasdas")
// );

// const students = [
//       { name: 'Ali', age: 20, grade: 85 },
//       { name: 'Ayşə', age: 20, grade: 92 },
//       { name: 'Ayşasdə', age: 20, grade: 92 },
//       { name: 'Məmməd', age: 20, grade: 78 },
//       { name: 'Fatimə', age: 20, grade: 88 }
// ];

// students.find((student) => {
//       console.log(student.name === 'Ali');

// })

// students.filter((student) => {
// if (student.name === "Aliadas") {
//       console.log("finded");
// } else {
//       console.log("there is no such an item");

// }
// })

// const test = students.every(student => student.age <= 20)


// students.forEach((student) => {
//       if (test) {
//             console.log(student.name);

//       }

// })


const fruits = ['banan', 'alma', 'portağal', 'üzüm'];

// console.log(fruits.sort());

// const numbers = [10, 5, 40, 25, 1000, 1];

// let a = 1
// let b = 5
// console.log(numbers.sort((a, b) => b - a));



// const students = [
//       { name: 'Ali', grade: 85 },
//       { name: 'Ayşə', grade: 92 },
//       { name: 'Məmməd', grade: 78 }
// ];


// console.log(
//       students.sort((a, b) => a.grade - b.grade)

// );

// const letters = ['b', 'c,', 'a', 'd'];

// console.log(letters.sort().reverse());

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = arr1.concat(arr2, arr3, fruits)
console.log(combined);