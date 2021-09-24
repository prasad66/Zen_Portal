function inputCheck() {
  let kuralNumber = document.getElementById("kuralNumber").value;

  // checking whether the number is between 1-1330, else displaying the error message
  if (kuralNumber > 1330 || kuralNumber < 1) {
    console.log(kuralNumber);
    document.getElementById("error").innerHTML=`<i class="fas fa-exclamation-triangle mr-2"></i>Please enter a number between 1-1330!!!`;
    document.getElementById("error").style.display = "inline";
    return;
  }

  // fetching the kural based on the nu,ber entered in the input field and writing the result
  fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNumber}`).then(data => data.json()).then(data => {
    document.getElementById("new").innerHTML = ` <div class="container">
    <div class="row d-flex justify-content-around">
      <div class="col-12 col-md-4 my-3 rounded-bottom">
        <div class="card bg-light mb-3 border-0 rounded-bottom">
          <div class="card-header border-0 bg-primary text-white fw-bold text-center">தமிழ்</div>
          <div class="card-body">
            <p class="card-text"><span class="fw-bold">குறள் எண்:</span> ${data.number}</p>
            <p class="card-text"><span class="fw-bold">பால்:</span> ${data.sect_tam}</p>
            <p class="card-text"><span class="fw-bold">அதிகாரம்:</span> ${data.chapgrp_tam}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 my-3">
        <div class="card bg-light mb-3 border-0">
          <div class="card-header border-0 bg-primary text-white fw-bold text-center">English</div>
          <div class="card-body">
            <p class="card-text"><span class="fw-bold">Section: </span>${data.sect_eng}</p>
            <p class="card-text"><span class="fw-bold">Chapter Group: </span>${data.chapgrp_eng}</p>
            <p class="card-text"><span class="fw-bold">Chapter: </span>${data.chap_eng}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-10 my-3">
        <div class="card bg-light mb-3 border-0">
          <div class="card-header border-0 bg-primary text-white fw-bold text-center">குறள்(தமிழ்)</div>
          <div class="card-body">
          <table class="table">
          <tr>
          <td> <span class="fw-bold">குறள்: </span></td>
          <td> ${data.line1} <br>${data.line2}</td>
          </tr>
          <tr></tr>
          <tr>
          <td> <span class="fw-bold">விளக்கம்: </span></td>
          <td> ${data.tam_exp}</td>
          </tr>
          </table>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-10 my-3">
        <div class="card bg-light mb-3 border-0">
          <div class="card-header border-0 bg-primary text-white fw-bold text-center">Kural(English)</div>
          <div class="card-body">
          <table class="table">
          <tr>
          <td> <span class="fw-bold">Kural: </span></td>
          <td> ${data.eng}</td>
          </tr>
          <tr></tr>
          <tr>
          <td> <span class="fw-bold">Explaination: </span></td>
          <td> ${data.eng_exp}</td>
          </tr>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    // hiding the error if the input is correct
    document.getElementById("error").style.display = "none";
  }).catch(errorMsg => {
    document.getElementById("error").innerText="Something went wrong!!! Please try again...";

  })
}

