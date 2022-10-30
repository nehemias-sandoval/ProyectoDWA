let url = 'https://api.spacexdata.com/v4/landpads';

$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: (response) => {
            printPlataformas(response);
        }
    });
});

const printPlataformas = (response) => {
    $.each(response, (i, item) => {
        let col = `<div class="col-12 mb-5">
         <div class="card text-bg-dark border-primary mx-auto" style="width: auto;">
           <img src="${item.images.large}" class="card-img-top" alt="${item.name}">
           <div class="card-body">
             <h5 class="card-title">${item.full_name} (${item.name})</h5>
             <p class="card-text">${item.details}</p>  
             <ul class="list-group list-group-flush">
                <li class="list-group-item text-bg-dark border-primary"><b>Region</b>: ${item.region}</li>
                <li class="list-group-item text-bg-dark border-primary"><b>Locality</b>: ${item.locality}</li>               
                <li class="list-group-item text-bg-dark border-primary"><b>Landing Attempts</b>: ${item.landing_attempts}</li>
                <li class="list-group-item text-bg-dark border-primary"><b>Landing Successes</b>: ${item.landing_successes}</li>
                <li class="list-group-item text-bg-dark border-primary"><b>Latitude</b>: ${item.latitude}</li>
                <li class="list-group-item text-bg-dark border-primary"><b>Longitude</b>: ${item.longitude}</li>
                <li class="list-group-item text-bg-dark border-primary mx-auto">
                    <a href="${item.wikipedia}" target="_blank" class="btn btn-secondary border border-primary m-2">More information</a>
                    <a href="map.html?name=${item.name}&latitude=${item.latitude}&longitude=${item.longitude}" class="btn btn-secondary border border-primary m-2">Map</a>
                </li>                
             </ul>        
           </div>         
         </div>
        </div>`

        $('#plataformas').append(col);
    });
}