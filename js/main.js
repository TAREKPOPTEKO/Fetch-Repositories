// Main Varible 

let theInput = document.querySelector('.get-repos input')
let theButton = document.querySelector('.get-button')
let showData = document.querySelector('.show-data')
theButton.onclick = function() {
    getReps()
}

function getReps() {
    if (theInput.value == "") {
        showData.innerHTML = "<span>Pleas Enter Github User Name</span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((repositories) => {
                // Empty The Container
                showData.innerHTML = "";
                // Show Repositories
                repositories.forEach((repository) => {
                    showData.innerHTML += `
                    <ul>
                        <li><a class="item" href="${repository.html_url}"> <span class='name'>${repository.name}</span>   <span class="stars">Stars: ${repository.stargazers_count} <i class="fa-regular fa-star icon-star"></i></span> </a></li>
                    </ul>`;
                });
            })
        }
    }