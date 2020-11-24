function getCurrentYear() {
  var d = new Date();
  return d.getFullYear();
}
document.querySelector(
  "#copyright"
).innerHTML = `Sophanorin Hoeu &copy; ${getCurrentYear()}`;
