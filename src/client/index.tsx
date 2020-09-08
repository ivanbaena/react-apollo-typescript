const a = document.querySelector('#root > div > div');

if (a) {
  a.innerHTML = '<h1>Bundle.js</h1>';
  a?.addEventListener('click', () => alert('clicked!'));
}
