const hashes = {};
const parameters = location.search.split(/&|\?/).filter((value) => {
  return value.includes('=');
});

parameters.forEach((parameter) => {
  const parameterList = parameter.split('=');
  const key = parameterList[0];
  const value = decodeURIComponent(parameterList[1]);
  hashes[key] = value;
});

if (hashes['id'] != null) {
  document.querySelector('.id').innerHTML = hashes['id'];
}

if (hashes['name'] != null) {
  document.querySelector('.name').innerHTML = hashes['name'];
}

if (hashes['age'] != null) {
  document.querySelector('.age').innerHTML = hashes['age'];
}