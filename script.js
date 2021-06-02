const APIURL = 'https://api.github.com/users/'; 

const main = document.getElementById("main"); 
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser("uniqcle"); 

async function getUser( userName ){
    const res = await fetch( APIURL + userName ); 
    const userData = await res.json(); 

    console.log( userData )

    createUserCard( userData ); 
}


function createUserCard( userData ){
    const cardHTML = `
    <div class = "card">
        <div class = "img-container">
            <img class = "avatar" src = "${userData.avatar_url}" alt = "${userData.name}" />
        </div>
        <div class = "user-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            <ul class = "info">
                <li>${userData.followers}<strong>Followers</strong></li>
                <li>${userData.following}<strong>Following</strong></li>
                <li>${userData.public_repos}<strong>Repos</strong></li>
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
        search.value = ""; 
    }
})