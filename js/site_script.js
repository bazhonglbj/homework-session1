var partners = [
    { src: 'images/partners/partner-bustour.png', alt: 'Partner Bus Tours' },
    { src: 'images/partners/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
    { src: 'images/partners/partner-campingadv.png', alt: 'Partner Camping Adventure' },
    { src: 'images/partners/partner-collegetours.png', alt: 'Partner College Tours' },
    { src: 'images/partners/partner-rentalbike.png', alt: 'Partner Rental Bike' },
    { src: 'images/partners/partner-tourgroup.png', alt: 'Partner Tour Group' },
];

var htmlContent = partners.map(function(partner) {
    return `<li class="partner col-12 col-sm-6 col-md-4 col-lg-1">
                <img src="${partner.src}" alt="${partner.alt}" class="img-fluid">
            </li>`;
}).join('');

document.getElementById('partners').innerHTML = htmlContent;