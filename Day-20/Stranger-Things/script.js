// image urls for image rotation for every time
const imgUrls = ["https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_FMjpg_UY720_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/A17UUHFi6BL.jpg",
  "https://assets1.ignimgs.com/2017/10/23/stranger-things-ver26-xlg-1508774232839.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5ugpKUxjpcfYfrLLFb23Gc0CmnNpyy12UigxtC7S3plUaSwHblgQuXcusD_I8GmeBsM&usqp=CAU"];

// variable for image change
let i = 0;
async function fetchQuote() {

  // input number
  let number = document.getElementById("numberOfQuotes").value;

  let quotes = await (await fetch(`https://lucifer-quotes.herokuapp.com/v1/quotes/${number}`)).json();
  let quoteCard = document.getElementById("quote");
  let img = document.getElementById("img-card");

  // image number set back to first after one full change
  if (i >= imgUrls.length)
    i = 0;

  // image changing
  img.innerHTML = `<img
  src=${imgUrls[i]}
  alt="Stranger Things Banner"
  class="card-img h-auto"
/>`;
  i++;

  quoteCard.innerHTML = ``;

  // quotes displaying ,by looping thru the quotes object array if it contains more than one quote
  quotes.forEach(element => {
    let quote = document.createElement("p");
    quote.innerHTML = `
    <figure class="text-center my-3">
    <blockquote class="blockquote">
    <p>${element.quote}.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
    <cite title="Source Title" class="text-end">${element.author}</cite>
    </figcaption>
    </figure>     
    `;
    quoteCard.append(quote);
  });
  number.value = "";
}

