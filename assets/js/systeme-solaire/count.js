let url = "https://api.le-systeme-solaire.net/rest/knowncount/"

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      printCount(response.knowncount);
    },
  });
});

const printCount = (response) => {
  $.each(response, (i, item) => {
    let col = `<div class="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
        <div class="card bg-dark border-primary" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light">Type: ${item.id}</h5>
        <ul> 
            <li class="text-light"><strong>Count: </strong>${item.knownCount}</li>
            <li class="text-light"><strong>Update Date: </strong>${item.updateDate}</li>
        </ul>
        </div>
      </div>
      </div>`;

    $("#count").append(col);
  });
};
