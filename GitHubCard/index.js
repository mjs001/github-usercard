/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function gitHubCard(data) {
  console.log(data)
  let newCard = document.createElement("div"),
  newImg = document.createElement("img"), 
  cardInfo = document.createElement("div"),
  newH3 = document.createElement("h3"),
  newUsername = document.createElement("p")
  newLocation = document.createElement("p"),
  newProfile = document.createElement("p"),
  newProfileLink = document.createElement("a"),
  newFollowers = document.createElement("p"),
  newFollowing = document.createElement("p"),
  newBio = document.createElement("p");

  newImg.src = data.data.avatar_url;
  newH3.textContent = data.data.name;
  newUsername.textContent = data.data.login;
  newLocation.textContent = "Location: " + data.data.location;
  newProfile.textContent = "Profile: " + data.data.url;
  newFollowers.textContent = "Followers: " + data.data.followers;
  newFollowing.textContent = "Following: " + data.data.following;
  newBio.textContent = "Bio: "  + data.data.bio;

  
  newCard.appendChild(newImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(newH3);
  cardInfo.appendChild(newUsername);
  cardInfo.appendChild(newLocation);
  cardInfo.appendChild(newProfile);
  newProfile.appendChild(newProfileLink);
  cardInfo.appendChild(newFollowers);
  cardInfo.appendChild(newFollowing);
  cardInfo.appendChild(newBio);
  newCard.classList.add("card");
  cardInfo.classList.add("card-info");
  newH3.classList.add("name")
  newUsername.classList.add("username")
 
  

  entryPoint.appendChild(newCard);

  return newCard;
}
const entryPoint =
  document.querySelector(".cards");

axios.get("https://api.github.com/users/mjs001")
.then(response => {
  console.log(response)
 let responseData = response
 entryPoint.appendChild(gitHubCard(responseData))
 
})


.catch(error => {
  console.log("the data was not returned, you have an error!", error)
})



const followersArray = [
"mzstevens69",
"ryankayne",
"leachcoding",
"phil-mac",
"bseverino"
];
followersArray.forEach((eachPerson) =>{
  axios.get("https://api.github.com/users/" + eachPerson)
  .then(response => {
      let eachFollowersC = gitHubCard(response)
      entryPoint.appendChild(eachFollowersC)
      
  })
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
