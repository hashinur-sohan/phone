function inputName() {
    const takeInput = document.getElementById('take-input');
    const input = takeInput.value;
    return input;
}

document.getElementById('button-addon2').addEventListener('click', function () {

    const returnInput = inputName();
    fetch(`https://openapi.programming-hero.com/api/phones?search=${returnInput}`)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(data => displayPhone(data.data))


})

function detailse(data) {
    fetch(`https://openapi.programming-hero.com/api/phone/${data}`)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(data => displayPhone(data))
    console.log(data);
}

function displayPhone(data) {
    // const phone = phones.brand;
    const cardId = document.getElementById('card-id');
    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
                 <img src=${user.image} class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${user.phone_name}</h5>
                      <p class="card-text">${user.brand}</p>
                      <button onclick="detailse  ('${user.slug}')">Details</button>
                 </div>
            </div>  
        `
        cardId.appendChild(div);
    }
}





