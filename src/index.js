import './style.css';
import getData from './getData.js';
import createGame from './createGame.js';
import addScore from './addScore.js';
import displayScore from './displayScore.js';

const addButton = document.querySelector('.add');
const refreshButton = document.querySelector('.refresh');
const listContainer = document.querySelector('.lists');
const paragraph = document.querySelector('.paragraph');

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await createGame();
  let gameId = data.result;
  gameId = gameId.substring(14, 34);

  addButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = document.querySelector('#user_name');
    const userScore = document.querySelector('#user_score');
    if (userName.value === '' || userScore.value === '') {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Please add your name and score';
      errorMsg.style.display = 'block';
      errorMsg.style.backgroundColor = 'red';
      errorMsg.style.color = '#fff';
      errorMsg.style.margin = '1rem auto 0';
      errorMsg.style.width = '400px';
      errorMsg.style.padding = '10px';
      paragraph.appendChild(errorMsg);
    } else {
      paragraph.innerHTML = '';
      await addScore(userName.value, userScore.value, `${api}${gameId}/scores/`);
      userName.value = '';
      userScore.value = '';
    }
  });

  refreshButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const endResult = await getData(`${api}${gameId}/scores`);
    await displayScore(listContainer, endResult.result);
  });
});