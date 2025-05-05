
var searchBtn = document.querySelector(".search");
var usernameinp = document.querySelector('.usernameinp');
var card = document.querySelector(".card")

function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`).then(raw => {
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


function decorateProfileData(details) {
    console.log(details);
    let data = `<img src="${details.avatar_url}" alt="User Avatar"
                  class="w-24 h-24 rounded-full border-2 border-blue-500 object-cover" />
  
              <div class="flex-1 space-y-2">
                  <h2 class="text-2xl font-semibold">${details.name}</h2>
                  <p class="text-gray-400 text-sm">@${details.login}</p>
                  <p class="text-sm mt-2 text-gray-300">
                      ${details.bio ? details.bio : "Sorry there is no bio..."}
                  </p>
  
                  <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-300">
                      <div>
                          <span class="font-semibold text-white">Public Repos:</span> ${details.public_repos}
                      </div>
                      <div>
                          <span class="font-semibold text-white">Followers:</span> ${details.followers}
                      </div>
                      <div>
                          <span class="font-semibold text-white">Following:</span> ${details.following}
                      </div>
                      <div>
                          <span class="font-semibold text-white">Location:</span> ${details.location}
                      </div>
                      <div>
                          <span class="font-semibold text-white">Company:</span> ${details.company ? details.company : "N/A"}
                      </div>
                      <div>
                          <span class="font-semibold text-white">Blog:</span>
                          <a href="#" class="text-blue-400 hover:underline"
                              target="_blank">${details.blog}</a>
                      </div>
                  </div>
              </div>`;
  
    card.innerHTML = data;
  }


searchBtn.addEventListener("click", function() {
    var username = usernameinp.value.trim();
    if(username.length > 0) {
        getProfileData(username).then((data) => {
            decorateProfileData(data);
        });
    } else {
        alert();
    }

});