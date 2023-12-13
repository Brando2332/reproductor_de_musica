axios.get("https://leonardoapi.onrender.com/music")
    .then((res) => {
        res.data.map((song) => {
            
            let div = document.createElement("div")
            div.classList.add("card-concentracion")

            div.innerHTML = `
            <div class="card">
            <div class="card-img">
                <img
                    src="${song.path.front}"
                    alt="${song.album} - ${song.title}"
                />
            </div>
            <h2>${song.title}</h2>
            <p>${song.album} - ${song.author}</p>
            </div>
            `
            
            div.addEventListener("click" ,  () => {
                
                document.querySelector("#current-song-title").innerHTML = song.title

                document.querySelector("#current-song-author").innerHTML = song.author

                document.querySelector("#current-song-img").setAttribute("src", song.path.front)

                document.querySelector("#current-song-audio").setAttribute("src", song.path.audio) 

            })




            document.querySelector("#tracklist").
            appendChild(div)











    })
})