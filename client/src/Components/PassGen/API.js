import axios from "axios";
const APIKEY = "ba21c711ecmsh3c9816a0af30efcp14f9f7jsn369ae3c3e8bf";

export default {
  extract: async function (query) {
    try {
      await axios
        .request({
          method: "GET",
          url: "https://wordsapiv1.p.rapidapi.com/words/",
          params: {
            partofspeech: query,
            random: true,
          },
          headers: {
            "x-rapidapi-key": APIKEY,
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          },
        })
        .then(function (response) {
          return response.data.word;
        });
    } catch (error) {
      console.error(error);
    }
  },
};
