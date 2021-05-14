window.addEventListener('hashchange', handleHashChange);
handHashChange();

function handleHashChange() {
  const hash = location.hash;
  document.querySelector('.log').innerHTML = `現在のアンカーは「${hash}」です`;
}