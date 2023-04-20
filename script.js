// image container
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];



// Unsplash APi

const count = 10
const apiKey = "b_8qlEv-8Q1mEHclK8DIwzXJIQLt1_Vi85WC8rJYDu4"
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function displayPhotos(){
    photosArray.forEach((photo)=>{

        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
    
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('tittle',photo.alt_description);
    
        item.appendChild(img);
        imageContainer.appendChild(item);
    });

}

async function getPhotos(){
    try{
        const response = await fetch(apiURL)
        photosArray = await response.json()


        // console.log (photosArray);
        displayPhotos();
    }catch(error){}
}

// On load
getPhotos()