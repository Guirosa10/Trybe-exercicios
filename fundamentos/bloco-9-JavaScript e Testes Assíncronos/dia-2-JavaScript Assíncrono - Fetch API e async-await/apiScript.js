// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const getContainer = document.getElementById('jokeContainer');
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  const joke = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke)
    .catch((error) => console.log(error));
  console.log(joke);
};

window.onload = () => fetchJoke();