// console.log(1);

// setTimeout(() => {
//       console.log(2);
// }, 1000);

// const timer = setInterval(() => {
//       console.log(2);
// }, 1000);

// clearInterval(timer);

// console.log(3);

// https://68a2a7ecc5a31eb7bb1d65e8.mockapi.io/movies/movies

// try {
//       fetch('https://68a2a7ecc5a31eb7bb1d65e8.mockapi.io/movies/movies')
//             .then(response => {
//                   if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                   }
//                   return response.json();
//             })
//             .then(data => {
//                   console.log(data);
//             })
//             .catch(error => {
//                   console.error('There was a problem with the fetch operation:', error);
//             });
// } catch (error) {
//       console.error('There was a problem with the try block:', error);
// }
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(x => console.log(x))
//       .catch(error => console.error('Xəta:', error));


async function fetchData() {
      try {
            const response = await fetch('https://68a2a7ecc5a31eb7bb1d65e8.mockapi.io/movies/movies');
            const data = await response.json();
            console.log(data);
      } catch (error) {
            console.error('Xəta:', error);
      }
}

fetchData();

// const myPromise = new Promise((resolve, reject) => {

//       const isSuccess = false;

//       setTimeout(() => {
//             if (isSuccess) {
//                   resolve('Promise resolved!');
//             } else {
//                   reject('Promise rejected!');
//             }
//       }, 2000);
// });


// myPromise
//       .then(result => {
//             console.log(result);
//       })
//       .catch(error => {
//             console.error(error);
//       });


