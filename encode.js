document.querySelector('#tweetButton').addEventListener('click', () => {
  let tweetText = document.querySelector('#tweetTextArea').value;
  tweetText += ' #JavaScript';
  const encodedText = encodeURIComponent(tweetText);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(tweetURL);
});