
const myForm = document.querySelector("form")
const myInput = document.querySelector("input")
const myBtn = document.querySelector(".btn")
const myList = document.querySelector(".list")

myBtn.disabled = !myInput.value.trim();

myInput.addEventListener('input', function () {
      myBtn.disabled = !myInput.value.trim();
});




myForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!myInput.value.trim()) {
            myBtn.disabled = true;
            return;
      }
      const listItem = document.createElement("li");
      const inputVal = document.createElement('p');
      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      inputVal.innerText = myInput.value;
      listItem.append(inputVal);
      myList.append(listItem);
      listItem.append(delBtn);
      delBtn.addEventListener('click', function () {
            listItem.remove()
      })
      myInput.value = '';
      myBtn.disabled = true;
});

