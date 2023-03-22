//this is comment to check if the commit works
var industryName;

const industries = new Map();
$('.industry-name-item').each(function () {
    const s = $(this).children('div.industry-name'); //industry name
    industryName  = s[0].innerText;
    //adding the values into a map
    industries.set(f, e);
    $('#Industry').append(`<option value="` + f + `">` + f + `</option>`);
});




