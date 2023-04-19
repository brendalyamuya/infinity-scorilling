// Unsplash APi

const count = 10
const apiKey = "b_8qlEv-8Q1mEHclK8DIwzXJIQLt1_Vi85WC8rJYDu4"
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

async function getPhotos(){
    try{
        const response = await fetch(apiURL)
        photosArray = await response.json()

        console.log (photosArray);
    }catch(error){}
}

// On load
getPhotos()