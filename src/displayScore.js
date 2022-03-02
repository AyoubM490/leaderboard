const displayScore = async (lists, listItems) => {
  lists.style.display = 'flex';
  lists.innerHTML = '';

  for (let i = 0; i < listItems.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const userName = document.createElement('h3');
    userName.classList.add('username');
    userName.textContent = `${listItems[i].user}:`;
    const userScore = document.createElement('h3');
    userScore.classList.add('score');
    userScore.textContent = listItems[i].score;
    li.append(userName, userScore);
    lists.appendChild(li);
  }
};

export default displayScore;