const endpoint = "https://kea-alt-del.dk/t7/api/categories";
/*Her henter vi vores online informationer fra*/

const container = document.querySelector(".category_in_list");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
  data.forEach((hverdata) => {
    container.innerHTML += `<div class="img_box"><a href="produclist.html">${hverdata.category}</a></div> `;
  });
}

getData();

/*Lav function (getData), hvor vi fetcher/henter info fra vores endpoint-konstant 
      *Fetch er et APi (måden scripts taler med hinaden på) - Asynkron metode. 
Herefter 'then', som venter på dataen er hentet og herefter gør sin function.
*Respon = selvvalgt. Når fisken er hentet, vil vi gerne se dataen i dette format (i dette tilfælde JSON-format),
herefter vil vi (then) showData = få vist vores data


**JSON = Data format
**Promise chain = Lyt, hent, læg ned, vis data
*/
