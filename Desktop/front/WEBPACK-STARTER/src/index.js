import generateJoke from "./jenerateJoke"

import './styles/main.scss'

import laughing from './assets/laugh.png'

const laughImg = document.getElementById('laughImg')

laughImg.src = laughing

console.log(generateJoke())


const jokebtn = document.getElementById('jokeBtn').addEventListener('click', generateJoke)

generateJoke()