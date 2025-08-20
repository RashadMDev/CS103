// SweetAlert2 is now available globally through CDN
// Remove the import statement since we're using CDN

// const myInput = document.querySelector('#input');
// const myOutput = document.querySelector('#output');
// const myButton = document.querySelector('#button');
// const myForm = document.querySelector('#form');

// myForm.addEventListener('submit', (event) => {
//       event.preventDefault()
//       const inputText = myInput.value;
//       myOutput.innerHTML = `<p>${inputText}</p>`
// })

//
// document.body.addEventListener('mouseover', (event) => {
//       event.preventDefault();
//       console.log("over");

// });

// const hobbies = ['Reading', 'Coding', 'Gaming', 'Hiking'];
// localStorage.setItem('userName', 'Rashad')
// localStorage.setItem('userAge', 25)
// localStorage.setItem('userHobbies', JSON.stringify(hobbies))
// localStorage.setItem('userLocation', 'Azerbaijan, Baku')

// const user = {
//       name: 'Rashad',
//       age: 25,
//       hobbies: ['Reading', 'Coding', 'Gaming', 'Hiking'],
//       location: 'Azerbaijan, Baku'
// }

// const user1 = JSON.parse(localStorage.getItem('user'))

// console.log(user1);


// localStorage.setItem('user', JSON.stringify(user));

// localStorage.removeItem('user')

//-------   

// window.addEventListener('load', () => {
//       Swal.fire({
//             title: "18 yaşdan böyüksünüz mü?",
//             showDenyButton: true,
//             confirmButtonText: "Bəli",
//             denyButtonText: `Yox`
//       }).then((result) => {
//             if (result.isConfirmed) {
//                   localStorage.setItem('isAdult', true);
//                   Swal.fire("Buyurun saytımıza!");
//             } else if (result.isDenied) {
//                   localStorage.setItem('isAdult', false);
//                   Swal.fire("Giriş icazəniz yoxdur",);
//             }
//       });
// });
// localStorage.clear();


//------------------


// expires in 7 days



// window.addEventListener('load', () => {
//       const date = new Date();
//       date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
//       document.cookie = `token=abc123; expires=${date.toUTCString()}; path=/`;
// });

// function deleteCookie(name) {
//       document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// }

// Example usage:
// deleteCookie("token");
