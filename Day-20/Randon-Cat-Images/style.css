let imgPlace = document.getElementById("img-card"); // image placeholder
let imgLink = document.getElementById("img-link");  // link placeholder


async function getImage() {
  let response = await (await fetch("https://aws.random.cat/meow").ca).json();

  // writing the image data into the placeholder
  imgPlace.innerHTML = `<img
    src=${response.file}
    alt="Stranger Things Banner"
    class="card-img-top h-100"
  />`;

  // image link into the place holder
  imgLink.value = `${response.file}`;

  // applying class to the button for background
  document.getElementById("copy").className = "btn btn-primary my-2 col-3";

  // text for button after thr text change
  document.getElementById("copy").innerText = "Copy";

  // changing the display of image and the link holder 
  document.getElementById("img-link").style.display = "inline";
  document.getElementById("copy").style.display = "inline";
}

function copyLink() {

  imgLink.select();   // Select the text field 
  imgLink.setSelectionRange(0, 99999);   // Select For mobile devices 
  navigator.clipboard.writeText(imgLink.value); // Copying the select text to clipboard 

  document.getElementById("copy").className = "btn btn-light my-2 col-3 border";  // changing the button color after copying
  document.getElementById("copy").innerText = "Copied!!";  //Changing the copy text to copied after coping

}
