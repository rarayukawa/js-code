const date = new Date();
const locale = date.toLocaleString();
const localeDate = date.toLocaleDateString();
const localeTime = date.toLocaleTimeString();

document.querySelector('#log').innerHTML = `${locale}<br />
${localeDate}<br />
${localeTime}`;