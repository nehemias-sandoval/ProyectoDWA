let url = 'https://api.spacexdata.com/v4/rockets/query';

$(document).ready(() => {

    let data = {
        query: {},
        options: {
            limit: 6,
        }
    }

    $.ajax({
        type: "POST", 
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        url: url,
        dataType: "json",
        success: (response) => {
            printRockets(response.docs);
        }
    });
});

const printRockets = (response) => {
    $.each(response, (i, item) => {
        let col = `<div class="col-lg-6 col-md-6 col-sm-12 mb-5">
         <div class="card text-bg-dark border-primary mx-auto" style="width: 20rem;">
           <img src="${item.flickr_images[0]}" class="card-img-top" alt="${item.name}">
           <div class="card-body">
             <h5 class="card-title">${item.name}</h5>
             <a href="${item.wikipedia}" target="_blank" class="btn btn-secondary border border-primary">More information</a>
           </div>
         </div>
        </div>`

        $('#rockets').append(col);
    });
}