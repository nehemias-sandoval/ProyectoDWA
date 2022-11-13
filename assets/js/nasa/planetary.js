let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: (response) => {
            //console.log(response);
            
                console.log(response.explanation);
                
                let col = `<div class="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
                <div class="card text-bg-dark border-primary mx-auto" style="width: 20rem;">
                  <img src="${response.url}" style='width:100%; height:80%;' class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title" style="text-aling:center;">${response.title} (${response.date})</h5>
                    <h5 class="card-title" style="text-aling:center;">${response.explanation})</h5>
                  </div>
                </div>
               </div>`
       
               $('#fotos').append(col);
            }
        
    });
});



