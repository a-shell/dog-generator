const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector(".breeds"); //Targets select drop-down with the class of "breeds"

//Grabs data from the API. If succesful then return the json file from the url
fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //The breedsObject constant will be populated with data from the API. 
        const breedsArray = Object.keys(breedsObject); //The breedsArray variable is an array populated with the keys from the breedsObject object, in this instance a list of dog breeds 
        for (let i = 0; i < breedsArray.length; i++){ //This loop will create a select dropdown and populate it with the breeds from breedsArray
            const option = document.createElement("option"); //Creates <option></option>
            option.value = breedsArray[i]; //Populates with the array elements. <option value="breed"></option>
            option.innerText = breedsArray[i]; //Adds human-readable text (eg. the breeds)
            select.appendChild(option); //This will append each element to the select drop-down in the DOM
        }
        
    })