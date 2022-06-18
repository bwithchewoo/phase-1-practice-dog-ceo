console.log('%c HI', 'color: firebrick')
let dogList = [] 
window.onload = function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        data.message.forEach(element => {
            let image = document.createElement("img")
            image.src = element
            image.width = "300"
            image.height = "300"
            let dogContainer = document.getElementById("dog-image-container")
            dogContainer.appendChild(image)
        })   
    })
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(function(resp){
        return resp.json()
    })
    .then(function(dataDog){
        for (const element in dataDog.message) {
            dogList.push(element)
        }
    })
}

document.addEventListener('change', function () {
    selectBreed();
});


function selectBreed(){
    let dogBreeds = document.getElementById("dog-breeds")
    while(dogBreeds.firstChild) {
        dogBreeds.removeChild(dogBreeds.firstChild)
    }
    let dropDown = document.getElementById("breed-dropdown")
    let newDogsFilter = dogList.filter(dog => dog.charAt(0) === dropDown.value) 
    let newDogsObject = Object.assign({}, newDogsFilter)   
    for (const element in newDogsObject){
        let imageUrl = document.createElement("li")
        imageUrl.innerText = newDogsObject[element]
        imageUrl.addEventListener("click", changeColor)
            function changeColor(){
                imageUrl.style = "color:blue"}
        let dogBreeds = document.getElementById("dog-breeds")
        dogBreeds.appendChild(imageUrl)
    }
}


