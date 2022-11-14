let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY';

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {

      for (var key in response.photos) {
        //console.log(response.photos[key].id);
        let col = `<div class="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
                <div class="card text-bg-dark border-primary mx-auto" style="width: 20rem;">
                  <img src="${response.photos[key].img_src}" style='width:100%; height:80%;' class="card-img-top" alt="${response.photos[key].id}">
                  <div class="card-body">
                    <h5 class="card-title">${response.photos[key].id} (${response.photos[key].earth_date})</h5>
                  </div>
                </div>
               </div>`

        $('#fotos').append(col);
      }
    }
  });
});



