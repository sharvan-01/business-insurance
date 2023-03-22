//this is comment to check if the commit works

const industries = new Map();
$('.industry-object').each(function () {
  const s = $(this).children('div.industry-name'); //industry name
  const f = s[0].innerText;
  const v = $(this).children('div.eligibility'); //eligibility status
  const e = v[0].innerText;
  //adding the values into a map
  industries.set(f, e);
  $('#eligible-industry').append(`<option value="` + f + `">` + f + `</option>`);
});
