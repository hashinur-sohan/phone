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
    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        
                <div class="card">
                    <img src=${"user.image"} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.brand}</p>
                    </div>
                </div>
            
        `
    }

}





