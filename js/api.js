function inputName() {
    const takeInput = document.getElementById('take-input');
    const input = takeInput.value;
    return input;
}

document.getElementById('button-addon2').addEventListener('click', function () {

    const returnInput = inputName();
    console.log(returnInput);
    fetch(`https://openapi.programming-hero.com/api/phones?search=${returnInput}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(data => displayPhone(data.data))


})

function displayPhone(data) {
    // const phone = phones.brand;
    const ul = document.getElementById('ul');
    for (const user of data)
        console.log(user.phone_name);
    const li = document.createElement('li');

    li.innerText = `name : ${user.phone_name} email : ${user.brand}`;
    ul.appendChild(li);
}





