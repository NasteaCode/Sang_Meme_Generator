function renderMeme(imgLink, topText, bottomText) {
  
  // Creating JS representations of HTML tags
  let imgCreate = document.createElement("img");    // why did we need to create the html tags in JS instead of creating it in the html page itself?
  let topTextContainer = document.createElement("div");
  let bottomTextContainer = document.createElement("div");
  let memeContainer = document.createElement("div");
  imgCreate.src=imgLink;
  
  // Assigning attributes
  memeContainer.onclick = function () { this.outerHTML = "" };  // anonymous function
  topTextContainer.innerHTML = topText;
  bottomTextContainer.innerHTML = bottomText;
  memeContainer.className += " container";
  topTextContainer.className += "text topTextString";
  bottomTextContainer.className += "text bottomTextString";

  /*
  1. User clicks meme
  
  2. functin is called "removeMeme(this)"
    
  3. Passes javascript object represetation of the div
  
  4. div.outerHTML = ""

let x = document.getElementById("pretend")
x.onclick = function (this) {
  this.outerHTML = ""
}

  */

  // <div class="one two"></div>
  // console.log(div.className)
  // "one two" + " three"
  // "one two three"
  // <div class="one two three"></div>


  // Adding tags to HTML document
  // document.body.appendChild(imgCreate);
  // document.body.appendChild(topTextContainer);
  // document.body.appendChild(bottomTextContainer);
  memeContainer.appendChild(imgCreate);
  memeContainer.appendChild(topTextContainer);
  memeContainer.appendChild(bottomTextContainer);
  document.body.appendChild(memeContainer);

  // Removing text field after submit
  document.getElementById('top-text').value=null;
  document.getElementById('bottom-text').value=null;
  document.getElementById('img-link').value=null;
}


function createMeme() {
  let imgLink = document.querySelector('#img-link').value;     // is the place holder the key? or would type attribute be the key?
  let topText = document.querySelector('#top-text').value;
  let bottomText = document.querySelector('#bottom-text').value;
  // console.log(imgLink, topText, bottomText);
  renderMeme(imgLink, topText, bottomText);    // JS only knows how to read what's beforehand so we put this function last
}



// positioning 
// removing input after submit is pressed
// removing the meme on click 
// adding bootstrap