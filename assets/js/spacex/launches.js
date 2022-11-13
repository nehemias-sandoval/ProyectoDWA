let url, numPage, sizePages;

$(document).ready(() => {
    url = 'https://api.spacexdata.com/v5/launches/query'
    numPage = parseInt($('#page').val());
    
    loadPage(url, numPage);

    $('#next').click(() => {
        if (numPage < sizePages) {
            numPage++;
            $('#page').val(numPage);
            loadPage(url, numPage);
        }
    });

    $('#previous').click(() => {
        if (numPage > 1) {
            numPage--;
            $('#page').val(numPage);
            loadPage(url, numPage);
        }
    });

    $('#page').keyup(function (e) {
        numPage = parseInt($('#page').val());
        if (e.keyCode == 13) {
            location.href = "#launchesTitle"
            if (numPage < sizePages && numPage > 0) {
                loadPage(url, numPage);
            } else {
                if (numPage <= 0) {
                    numPage = 1;
                    $('#page').val(numPage);
                } else {
                    numPage = sizePages;
                    $('#page').val(numPage);
                } 
                loadPage(url, numPage);
            }
        }
    });
});

const loadPage = (url, numPage) => {

    let data = {
        query: {},
        options: {
            limit: 10,
            page: numPage
        }
    }

    $.ajax({
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        url: url,
        dataType: "json",
        success: (response) => {
            sizePages = response.totalPages;
            $('#launches').empty();
            printLaunches(response.docs);
        }
    });
}

const printLaunches = (response) => {
    $.each(response, (i, item) => {
        let col = `<div class="col-lg-6 col-md-6 col-sm-12 mb-5 d-flex">
            <div class="card text-bg-dark border-primary mb-3 p-3" style="width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.links.patch.small}" class="img-fluid rounded-start" alt="${item.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.details != null ? item.details : "Without details"}</p>
                    <a href="${item.links.wikipedia}" target="_blank" class="btn btn-secondary border border-primary">More information</a>               
                    </div>
                </div>
                </div>
            </div>
        </div>`

        $('#launches').append(col);
    });
}