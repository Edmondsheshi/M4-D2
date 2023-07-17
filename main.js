

async function fetchData (apiUrl , sectionId) {
    try{
        let response = await fetch (apiUrl);
        let data = await response.json();
        let container = document.getElementById(sectionId);
        let addAlbums = {};
        data.data.forEach((song) => {
            if (!addAlbums[song.album.id]){
                let card = `
                    <div class="col mb-4">
                        <div class="card">
                            <img src="${song.album.cover_medium}" class="card-img-top img-fluid" alt="${song.album.title}">
                            <div class="card-body">
                                <h5 class="card-title">${song.album.title}</h5>
                                <p class="card-text">${song.artist.name}</p>
                                <p class="card-text">${song.album.title}</p>
                            </div>
                        </div>
                    </div>`;        
                container.innerHTML += card;
                addAlbums[song.album.id] = true;
                console.log(addAlbums);
            }
        });

    }catch(error){
        console.error("abbiamo trovato un errore" ,error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData(`https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari` , "pinguini");
    fetchData(`https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin` , "maneskin" );
    fetchData(`https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood` , "mahmood")
})

function tuttiAlbum (){
    tuttiTitoli = []
    let titoli = document.querySelectorAll(".card-title");
    for (let i = 0; i < titoli.length; i++){
        let risultato = titoli[i].textContent.trim()
        tuttiTitoli.push(risultato)
    }
    console.log(allTitle);
    let modal = document.querySelector('.modal-body')
    for (let i = 0; i < tuttiTitoli.length; i++) {
        let paragrafo = document.createElement('p')
        paragrafo.textContent = tuttiTitoli[i]
        modal.appendChild(paragrafo)
    }
}



