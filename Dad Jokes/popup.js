// Retrieve a random Dad joke from the API
async function fetchRandomDadJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data.joke;
  }
  
  // Display a random Dad joke on the webpage
  async function displayRandomDadJoke() {
    const jokeElement = document.getElementById('dad-joke');
    jokeElement.textContent = 'Loading...';
  
    try {
      const joke = await fetchRandomDadJoke();
      jokeElement.textContent = joke;
    } catch (error) {
      jokeElement.textContent = 'Failed to fetch a Dad joke :(';
      console.error(error);
    }
  }
  
  // Attach the displayRandomDadJoke function to a button click event
  document.getElementById('get-joke-btn').addEventListener('click', displayRandomDadJoke);
  