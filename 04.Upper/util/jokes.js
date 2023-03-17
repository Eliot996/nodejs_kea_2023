import Sentiment from "sentiment";
const sentiment = new Sentiment();

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

//fetch(url)
//    .then(response => response.json())
//    .then(result => console.log(result));

async function getJoke() {
    const response = await fetch(url);
    const result = await response.json();

    const jokeToAnalyse = result.joke || `${result.setup} ${result.delivery}}`
    const { score } = sentiment.analyze(jokeToAnalyse);

    if (score < 0) {
        return await getJoke();
    }
    return result;
}

//console.log(await getJoke());

export default getJoke;