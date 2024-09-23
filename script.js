// recuperer tous les elements  dom

// recuperer les bontons plus

const btnPlus = document.getElementsByClassName("fa-plus-circle")
console.log(btnPlus)

// RECUPERER LES BONTONS MOINS 

const btnminus = document.getElementsByClassName("fa-minus-circle")
console.log(btnminus)

// RECUPERER LES BONTONS SUPPRIMES 

const btntrash = document.getElementsByClassName("fa-trash-alt")
console.log(btntrash)

// RECUPERER LES BONTONS JAIME

const btnheart = document.getElementsByClassName("fa-heart")
console.log(btnheart)

// RECUPERER LE TOTAL

let totalField = document.getElementsByClassName("total")[0]
 
const unitPrices = document.getElementsByClassName("price")
 
const quantity = document.getElementsByClassName("quantity")

// CALCUL TOTAL

function calcultotal(){
    let totalprices = 0
    for (let i = 0; i < unitPrices.length ; i++ ) {
        console.log(unitPrices[i].textContent)
        console.log(quantity[i].textContent)

       totalprices = totalprices+parseInt(unitPrices[i].textContent)*parseInt(quantity[i].textContent)
    }
totalField.textContent = totalprices
console.log(totalField)
}

// AJOUTER LES ECOUTEURS DEVENEMENTS SUR LES BONTONS PLUS 

for (let i = 0; i < btnPlus.length ; i++ ) {
    const button = btnPlus[i];
    button.addEventListener("click", () => { 
        console.log(` button $ {i} clicked`)
        const quantity = button.nextElementSibling
       const value = quantity.textContent
       const valueInt = parseInt(value)
       const newvalue = valueInt + 1
       quantity.textContent = newvalue
       calcultotal() 
         
})
}

// AJOUTER LES ECOUTEURS DEVENEMENTS SUR LES BONTONS MOINS

for (let i = 0; i < btnminus.length ; i++ ) {
    const button = btnminus [i]; 
    button.addEventListener("click", () => { 
        console.log(` button $ {i} clicked`)
        const quantity = button.previousElementSibling
       const value = quantity.textContent
       const valueInt = parseInt(value)
       const newvalue = valueInt - 1
      newvalue >= 0 ? quantity.textContent = newvalue : quantity.textContent = 0
      calcultotal()
})

}

// AJOUTER LES BONTONS SUPPRIMES

for (let i = 0; i < btntrash.length ; i++ ) {
    const button = btntrash [i]; 
    button.addEventListener("click", () => { 
     const productParentElement = button.parentElement.parentElement.parentElement.parentElement
     productParentElement.remove()
     calcultotal()
})

}

// AJOUTER LES ECOUTEURS DEVENEMENTS SUR LES BONTONS J'AIME 

for (let i = 0; i < btnheart.length ; i++ ) {
    const button = btnheart [i]; 
    button.addEventListener("click", () => { 
        const bgcolor = button.style.color
        if(bgcolor==="red"){
            button.style.color = "black"  
        }else{
            button.style.color = "red"  
        }
         console.log(bgcolor)
})
}

