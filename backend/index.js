import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config({
     path: './.env' 
    }
)

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

const jokes = [
  {
    "id": 1,
    "title": "Programmer Joke",
    "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    "id": 2,
    "title": "Math Joke",
    "content": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
  },
  {
    "id": 3,
    "title": "Dad Joke",
    "content": "I only know 25 letters of the alphabet. I don’t know y."
  },
  {
    "id": 4,
    "title": "Work Joke",
    "content": "Why don’t scientists trust atoms? Because they make up everything!"
  },
  {
    "id": 5,
    "title": "Animal Joke",
    "content": "Why don’t cows have money? Because farmers milk them dry!"
  },
  {
    "id": 6,
    "title": "Knock Knock Joke",
    "content": "Knock knock. Who’s there? Cow says. Cow says who? No silly, cow says moooo!"
  }
]

app.get('/', (req, res) => {
  res.send('Welcome to the Jokes API! Visit /jokes to see some jokes.');
});

app.get('/jokes', (req, res) => {
  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});