const input1 = document.querySelector('.entry');
const listItem = document.querySelector('.listcontainer');


function addTask() {
    if (input1.value === "") {
        alert('You must write something!');
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = input1.value;
        listItem.appendChild(li);
    }
    input1.value = '';
}

