let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      //console.log(response);

      console.log(response.explanation);

      let col = `<div class="col-10 mx-auto">
                <div class="card text-bg-dark border-primary mx-auto">
                  <img src="${response.url}" class="card-img-top" alt="">
                  <div class="card-body">
                    <h3 class="card-title">${response.title} (${response.date})</h3>
                    <p class="card-text">${response.explanation})</p>
                  </div>
                </div>
               </div>`

      $('#fotos').append(col);
    }

  });
});



