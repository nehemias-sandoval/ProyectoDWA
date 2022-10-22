let url = 'https://api.spacexdata.com/v4/company';

$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: (response) => {
            printCompany(response);
        }
    });
});

const printCompany = (response) => {

    let headquarters, socialNetworks, generalData;

    generalData = `
            <li class="list-group-item bg-dark text-light border-0"><strong>Name: </strong>${response.name}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>Summary: </strong>${response.summary}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>Founder: </strong>${response.founder}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>Founded: </strong>${response.founded}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>Employees: </strong>${response.employees}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>Valuation: </strong>$${response.valuation}</li>`;

    socialNetworks = `
            <li class="list-group-item bg-dark border-0"><a class="text-decoration-none text-light" href="${response.links.website}" target="_blank"><i class="fa-solid fa-earth-americas"></i>&nbsp;&nbsp;Website</a></li>
            <li class="list-group-item bg-dark border-0"><a class="text-decoration-none text-light" href="${response.links.flickr}" target="_blank"><i class="fa-brands fa-flickr"></i>&nbsp;&nbsp;Flickr</a></li>
            <li class="list-group-item bg-dark border-0"><a class="text-decoration-none text-light" href="${response.links.twitter}" target="_blank"><i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;Twitter</a></li>
            <li class="list-group-item bg-dark border-0"><a class="text-decoration-none text-light" href="${response.links.elon_twitter}" target="_blank"><i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;Elon Twitter</a></li>`;

    headquarters = `
            <li class="list-group-item bg-dark text-light border-0"><strong>Address: </strong>${response.headquarters.address}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>City: </strong>${response.headquarters.city}</li>
            <li class="list-group-item bg-dark text-light border-0"><strong>State: </strong>${response.headquarters.state}</li>`;

    $('#generalData').append(generalData);
    $('#SocialNetworks').append(socialNetworks);
    $('#Headquarters').append(headquarters);   
}