import fs from "fs";
import getJoke from "./jokes.js";
import escape from "escape-html";

function renderPage(page, config = {}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK",  config.cssLink  || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    return navbar + page + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

async function renderJokePage() {
    const path = "./public/pages/jokes/jokes.html"
    let jokePage = readPage(path);

    const joke = await getJoke();

    if (joke.joke) {
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", `<h3>${escape(joke.joke)}</h3>`);
    } else if (joke.delivery) {
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", `<h3>${escape(joke.setup)} : ${escape(joke.delivery)}</h3>`);
    } else {
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", "<h3>No joke for you.</h3>");
    }

    const constructedPage = renderPage(jokePage, {
        tabTitle: "Jokes  | Upper",
        cssLink: ` <link rel="stylesheet" href="/pages/jokes/jokes.css">`
    });

    return constructedPage;
}

export default {
    renderPage,
    readPage,
    renderJokePage,
};