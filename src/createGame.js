const createGame = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const endpoint = 'games/';
  const url = `${baseUrl}${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name: 'Dice game' }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response.json();
};

export default createGame;
