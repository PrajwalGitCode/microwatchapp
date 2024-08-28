//send watch data to database

document
.getElementById("watch-form")
.addEventListener("submit", function (event) {
    event.preventDefault();
    const formdata = new FormData(this);

    fetch("http://127.0.0.1:8000/api/watches/create/", {
        method: "POST",
        body: formdata,
    })

        .then((response) => response.json())
        .then((data) => {
            alert("Watch added successfully!");
            displayWatches()
        })

        .catch((error) => console.error("Error:", error));
});



//get all watch data 
const baseUrl="http://127.0.0.1:8000"

function displayWatches() {
    fetch("http://127.0.0.1:8000/api/watches/")
        .then((response) => response.json())
        .then((data) => {

            const container = document.getElementById("watches-container");
            container.innerHTML = ""; 

            data.forEach((watch) => {
                const imageUrl= baseUrl + watch.image
                const watchCard = `

                <div class="watch-list" id="watch-list">
                    <div class="watch">
                        <img src="${imageUrl}" alt="Watch Image"  style="height:60px; width:90px;"/>
                        <p class="watch-name">Watch Name:${watch.brand} </p>
                        <p class="watch-model">Watch Model:${watch.name}  </p>
                        <p class="watch-price">Price:${watch.price}  </p>
                    </div>
                </div>
                
                `;
                container.innerHTML += watchCard; // Add the watch card to the container
            });
    })
}


document.addEventListener("DOMContentLoaded", displayWatches);