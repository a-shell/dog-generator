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
            option.value = breedsArray[i]; //Populates with the array elements. Modifies to <option value="breed"></option>
            option.innerText = breedsArray[i]; //Adds human-readable text (eg. the breeds). Modifies to <option value="breed">Breed</option>
            select.appendChild(option); //This will add each element to the select drop-down in the DOM. Adds <option value="breed">Breed</option> to the select. 
        }
        
    });

    select.addEventListener("change", event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`; //Creates a variable that will be assigned a value of the dog api url with the user's selected choice of dog breed 
        getDogImg(url) //Run the getDogImg function the url above as the argument
    });

    const img = document.querySelector(".dog-img"); //Targets the image element with the class of "dog-img" in the html
    //Using the url above, replace the img source in the HTML with one from the dog api
    const getDogImg = url => {
        fetch(url) //Going to the API url above
            .then(res => {
                return res.json(); //Return JSON message
            })
            .then(data => {
                img.src = data.message; //Insert the img link from the json into the image tag in the html
            })
    };