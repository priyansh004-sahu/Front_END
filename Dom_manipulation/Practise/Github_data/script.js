
function getUserRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`).then(raw => {
       if(!raw.ok) throw new Error("user not found.");
       return raw.json();      
    });
}

function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => {
        if(!raw.ok) throw new Error("repos not fonund");
        return raw.json();
    })
}

getUserRepos("c").then(function(data) {
    console.log(data);
})
