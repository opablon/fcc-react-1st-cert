// https://the-one-api.dev/
// https://lotr-random-quote-api.herokuapp.com/api/quote

const { useState, useEffect } = React;

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    if (isLoading) {
      fetch(`https://lotr-random-quote-api.herokuapp.com/api/quote`).
      then(response => response.json()).
      then(json => {
        setQuoteData(json);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  const randomQuote = () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return /*#__PURE__*/(
      React.createElement("div", { id: "loading" }, /*#__PURE__*/
      React.createElement("h2", null, "Loading...")));


  }

  let quoteTextTweet = quoteData.quote;
  let quoteAuthorTweet = quoteData.author;
  let tweetHref = 'https://twitter.com/intent/tweet?text=' + '"' + quoteTextTweet + '" ' + quoteAuthorTweet;

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("h1", { id: "text" }, "\"", quoteData.quote, "\""), /*#__PURE__*/
    React.createElement("h3", { id: "author" }, quoteData.author), /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: randomQuote }, "New quote"), /*#__PURE__*/
    React.createElement("a", { class: "twitter-share-button", id: "tweet-quote", href: tweetHref, target: "_top" }, "Tweet quote")));



}

const root = document.getElementById('root');

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);