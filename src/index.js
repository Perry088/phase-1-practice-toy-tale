let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(data => {
    data.forEach(toy =>{
      const card = createToyCard(toy)
      document.getElementById('toy-collection').appendChild(card)
    })
  })

  function createToyCard(toy){
    const card = document.createElement('div')
    card.classList.add('toy-card')
    card.innerHTML= `
    <h2>${toy.name}<h2/>
    <p>${toy.description}<p/>`
    return card 
  }

  fetch('http://localhost:3000/toys', {
    methos:"POST"
    headers:{
      'content-type': 'application/json'
    }
    body:JSON.stringify(newToy  )
  })
