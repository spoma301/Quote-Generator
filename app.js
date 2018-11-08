var quotes = [
  "Nothing takes the taste out of peanut butter quite like unrequited love. - Charlie Brown",
  "And so I go, day after day, dodging questions from curious outsiders. - Rerun",
  "In the book of life, the answers aren't in the back. - Charlie Brown",
  "There's no sense in doing a lot of barking if you don't really have anything to say. - Snoopy",
  "Most psychiatrists agree that sitting in a pumpkin patch is excellent therapy for the mind. - Linus",

]

function newQuote() {
  // TEST: alert('hello?')
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}