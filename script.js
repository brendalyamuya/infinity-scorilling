// image container
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

function imageLoaded(){
    console.log('image loaded');
    imagesLoaded++;
    console.log(imageLoaded);
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);

    }
}

// Unsplash APi

const count = 30;
const apiKey = "b_8qlEv-8Q1mEHclK8DIwzXJIQLt1_Vi85WC8rJYDu4"
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}

function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;

    photosArray.forEach((photo)=>{

        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target','_blank');

        setAttributes(item,{
            href:photo.links.html,
            target:'_blank',
        })
    
        const img = document.createElement('img');
        // img.setAttribute('src',photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('tittle',photo.alt_description);

        setAttributes(img,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            tittle:photo.alt_description,
        })

        img.addEventListener('load',imageLoaded);
    
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

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos();
        console.log('load more');
    }

});

// On load
getPhotos()