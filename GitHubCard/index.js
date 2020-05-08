/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/jme-sull').then(response => {
  console.log(response)
//})


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



function createCard (data) {

  const { avatar_url, name, login, location, followers, following, bio, html_url } = data

  //create variables
  card = document.createElement('div')
  userImage = document.createElement('img')
  cardInfo = document.createElement('div')
  fullName = document.createElement('h3')
  userName = document.createElement('p')
  userLocation = document.createElement('p')
  userProfile = document.createElement('p')
  userProfileA = document.createElement('a')
  followersCount = document.createElement('p')
  followingCount = document.createElement('p')
  userBio = document.createElement('p')


  //append
  card.appendChild(userImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(fullName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(userProfileA)
  cardInfo.appendChild(followersCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(userBio)
  
  //add classes

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  fullName.classList.add('name')
  userName.classList.add('username')


  //inject data

  userImage.src = avatar_url
  userProfileA.href = html_url
  fullName.textContent = `Name: ${name}`
  userName.textContent = login
  userLocation.textContent = `Location: ${location}`
  followersCount.textContent = `Followers: ${followers}`
  followingCount.textContent = `Following: ${following}`
  userProfileA.textContent = `Profile: ${html_url}`
  userBio.textContent = `Bio: ${bio}`

 

  









  console.log(card)



  

return card

}




const followersArray = ['Brimes7', 'lex-marie790', 'MileyWright', 'Scott-Crawshaw', 'JoshHill15'];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`).then(response => {
    const dataObject = response.data
    const newCard = createCard(dataObject)
    const entryPoint = document.querySelector('.cards')
    entryPoint.appendChild(newCard)
  })
})

axios.get('https://api.github.com/users/jme-sull').then(response => {
  const myData = response.data
  const myCard = createCard(myData)
  const entryPoint = document.querySelector('.cards')
  entryPoint.appendChild(myCard)
   })

})
