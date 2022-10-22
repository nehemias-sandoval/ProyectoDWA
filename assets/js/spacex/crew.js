let url = 'https://api.spacexdata.com/v4/crew';

$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: (response) => {
            printTripulantes(response);
        }
    });
});

const printTripulantes = (response) => {
    $.each(response, (i, item) => {
        let col = `<div class="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
         <div class="card text-bg-dark border-primary mx-auto" style="width: 20rem;">
           <img src="${item.image}" class="card-img-top" alt="${item.name}">
           <div class="card-body">
             <h5 class="card-title">${item.name} (${item.agency})</h5>
             <a href="${item.wikipedia}" target="_blank" class="btn btn-secondary border border-primary">More information</a>
           </div>
         </div>
        </div>`

        $('#tripulantes').append(col);
    });
}