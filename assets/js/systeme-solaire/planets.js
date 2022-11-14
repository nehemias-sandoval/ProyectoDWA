let url =
  "https://api.le-systeme-solaire.net/rest/bodies?order=semimajorAxis,asc&filter[]=isPlanet,eq,true&page=1,12";

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      printPlanets(response.bodies);
    },
  });
});

const printPlanets = (response) => {
  $.each(response, (i, item) => {
    let col = `<div class="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
        <div class="card bg-dark border-primary mx-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light">${item.englishName}</h5>
        <ul> 
            <li class="text-light"><strong>Gravity: </strong>${item.gravity} m/s<sup>2</sup></li>
            <li class="text-light"><strong>Density: </strong>${item.density} g/cm<sup>3</sup></li>
            <li class="text-light"><strong>Escape: </strong>${item.escape} m/s</li>
        </ul>
        </div>
      </div>
      </div>`;

    $("#planets").append(col);
  });
};
