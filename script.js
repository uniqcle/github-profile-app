const APIURL = 'https://api.github.com/users/'; 

const main = document.getElementById("main"); 
const form = document.getElementById('form');
const search = document.getElementById('search');



async function getUser( userName ){
    const res = await fetch( APIURL + userName ); 
    const userData = await res.json(); 

    console.log( userData )

    createUserCard( userData ); 
}


function createUserCard( userData ){
    const cardHTML = `
    <div class = "card">
        <div>
            <img src = "${userData.avatar_url}" alt = "${userData.name}" />
        </div>
        <div>
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            <ul>
                <li>${userData.followers}</li>
                <li>${userData.following}</li>
                <li>${userData.public_repos}</li>
            </ul>
        </div>
    </div>    
    `; 

    console.log( cardHTML )

    main.innerHTML = cardHTML; 
}

form.addEventListener("submit", e=>{
    e.preventDefault(); 

    const searchUser = search.value; 
    if(searchUser){
        getUser( searchUser ); 
    }
})