export default {
  extract: async function (query) {
    let x;
    let url = `https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=${query}&lettersMin=4&lettersMax=8&random=true`;
    const wordURL = `https://wordsapiv1.p.rapidapi.com/words/?lettersMin=4&lettersMax=8&random=true`;
    if (query === "word") {
      x = wordURL;
    } else {
      x = url;
    }
    try {
      return await fetch(x, {
        method: "GET",
        redirect: "follow",
        cache: "reload",
        headers: {
          "x-rapidapi-key": process.env.APIKEY,
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return data.word;
        });
    } catch (error) {
      console.error(error);
    }
  },
};
