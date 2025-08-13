//Variables , Data Types

// let student = {
//       fullName: "Rashad Mammadov",
//       age: 24,
//       hobbies: ["watching moives", "coding"]
// }

// let colors = ["qırmızı", "yaşıl", "mavi"];

// colors.push(123, [1])
// colors.unshift("rashad")
// colors.insert(1, "asdasda")



// console.log(colors.lastIndexOf(123));
// console.log(colors);


// JS Operators

// let a = 5
// let b = "5";

// console.log(a && b);

// Functions
// console.log(greet("Rashad"));

// function greet(name) {
//       return `Salam ${name}!`
// }



// let customer = {
//       fullName: "JafarMammadov",
//       age: 17,
//       budget: 8
// }

// let movie = {
//       title: "DerUntergang",
//       genre: "War, Documentation",
//       ticketPrice: 8
// }

// function hasAccessToMoive(customer, movie, ticketCount) {
//       if (customer.age >= 18) {
//             if (customer.budget >= movie.ticketPrice * ticketCount) {
//                   console.log('====================================');
//                   console.log(`Your current balance is ${customer.budget = customer.budget - movie.ticketPrice * ticketCount}`);
//                   console.log('====================================');
//                   console.log('====================================');
//                   console.log("Enjoy the movie");
//                   console.log('====================================');
//             }
//             else {
//                   console.error("Not enough cash kasib!!!!");
//             }
//       }
//       else {
//             console.error("Age Restriction go watch this https://www.youtube.com/watch?v=wA5b9JJxtMc");

//       }
// }

// hasAccessToMoive(customer, movie, 1)




///Loops 

// let ages = [123, 1, 312, 31, 231, 23, 123, 12, 31, 2312, 123, 12, 312, 312, 31, 2]




// for (let index = 0; index < ages.length; index++) {
//       console.log(ages);
// }



function sumNumbers() {
      let sum = 0;
      for (let i = 1; i <= 10; i++) {
            sum += i;
            console.log(sum);

      }
      return sum;
}

// console.log(sumNumbers());

