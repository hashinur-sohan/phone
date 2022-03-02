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
// details function
function detailse(data) {
    fetch(`https://openapi.programming-hero.com/api/phone/${data}`)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(data => displayDetaile(data.data))

    // display function
    function displayDetaile(data) {
        const detailsId = document.getElementById('details');
        for (const details in data)
            console.log(`${details} ${data[details]}`);
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('mx-auto');
        detailsDiv.innerHTML = `
        <img src="${data.image}" alt="">
        <p>Phone Name: ${data.name}</p>
        <p>Brand Name: ${data.brand}</p>
        <p>Slug Id: ${data.slug}</p>
        `
        detailsId.appendChild(detailsDiv);
    }

}


// display phone function
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





