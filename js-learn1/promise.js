let giphyAPI =
  "https://api.giphy.com/v1/gifs/search?api_key=GhlfmlP64keupcoUbhsOYT78r10OSM6H&q=";

let randWords =
  "https://random-word-api.herokuapp.com/word?key=06DQTLAP&number=1";

function setup() {
  // loadJSON(giphyAPI, gotData);

  let promises = [];
  for (let x = 0; x < 10; x++) {
    promises.push(wordGIF());
  }

  Promise.all(promises)
    .then((results) => {
      for (let x = 0; x < results.length; x++) {
        createP(capitalize(results[x].text));
        createImg(results[x].img);
      }
    })
    .catch((err) => console.log(err));

  /*
  wordGIF()
  .then(results =>{
    createImg(results.img);
  })
  .catch((err)=> console.log(err));
  
  wordGIF()
  .then(results =>{
    createImg(results.img);
  })
  .catch((err)=> console.log(err));
  
  wordGIF()
  .then(results =>{
    createImg(results.img);
  })
  .catch((err)=> console.log(err));
  */
}

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

async function wordGIF() {
  let response1 = await fetch(randWords);
  let json1 = await response1.json();

  let response2 = await fetch(giphyAPI + json1[0]);
  let json2 = await response2.json();

  let img_url = json2.data[0].images["fixed_height_small"].url;

  return {
    img: img_url,
    text: json1[0],
  };
}
