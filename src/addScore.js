const addScore = async (name, score, url) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

export default addScore;