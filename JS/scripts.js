const next = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i) + 1;
  document.getElementById("id").innerHTML = toNum;

  getData(toNum);
}

const previous = () => {
  let i = document.getElementById("id").innerHTML;
  var toNum = parseInt(i) - 1;
  toNum < 0 ? toNum = 0 : toNum = toNum;
  document.getElementById("id").innerHTML = toNum;

  getData(toNum);
}

const uncheckAll = () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => (el.checked = false));
}
