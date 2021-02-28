const APIKEY = "ba21c711ecmsh3c9816a0af30efcp14f9f7jsn369ae3c3e8bf";
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
          "x-rapidapi-key": APIKEY,
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
