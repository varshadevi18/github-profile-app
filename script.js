const APIURL= 'https://api.github.com/users'
const main= document.getElementById("main")
const search= document.getElementById("search")
const form= document.getElementById("form")

// FEtch Github user data first

async function getUser(username){
    try{
        const {data}= await axios (APIURL + '/' +username);
        createUserCard(data);
        getRepos(username);

    }
    catch(err){
        if(err.response && err.response.status==404){
            createErrorCard('No profile found with this username');
        }

    }
}

// fetch repo data of the user
async function getRepos(username) {
    try{
        const {data}= await axios(APIURL+'/' +username+ '/repos?sort=created');
        addReposToCard(data);

    }
    catch(err){
        createErrorCard('Problem Fetching repos');
    }
    
}
//getUser function

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const user= search.value;
    if(user){
        getUser(user);
        search.value='';
    }
});

// create usercard function
function createUserCard(user){
    const userID= user.name || user.login;
    const userbio= user.bio? `<p>${user.bio}</p>`:"";
    const cardHTML=`
    <div class="card">
    <img src="${user.avatar_url}" alt="${user.name}" class='avatar'/>
    <div class="user-info">
    <h2>${userID}</h2>
    ${userbio}
    <ul>
    <li>${user.followers}<strong>Followers</strong>
    <li>${user.following}<strong>Following</strong>
    <li>${user.public_repos}<strong>Repos</strong>
    </ul>
    
    <div id="repos"></div>
    </div>
    </div>
    `
    main.innerHTML=cardHTML;
}
//create error card function
function createErrorCard(message){
    const cardHTML=`
    <div class="card">
    <h1>${message}</h1>
    </div>`;

    main.innerHTML= cardHTML;
}
// function add repos
function addReposToCard(repos){
    const reposEl= document.getElementById("repos");
    repos.slice(0,5).forEach(repo => {
        const repoEl= document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href=repo.html_url;
        repoEl.target='_blank';
        repoEl.innerText=repo.name;
        reposEl.appendChild(repoEl);
        
    });
    // fetch only 5 repos
}





