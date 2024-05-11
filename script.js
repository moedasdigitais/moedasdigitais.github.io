// Aqui você pode adicionar a lógica JavaScript para tornar o site mais dinâmico

// Exemplo: Obter dados dos elementos em destaque de uma API
fetch('https://moedasdigitais.net')
  .then(response => response.text())
  .then(html => {
    const gridContainer = document.querySelector('.grid-container');
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const articles = doc.querySelectorAll('article');

    articles.forEach(article => {
      const image = article.querySelector('img');
      const title = article.querySelector('h2 a');
      const description = article.querySelector('.post-excerpt p');

      const element = document.createElement('div');
      element.classList.add('f-posts-shortcode');
      element.innerHTML = `
        <img src="${image.src}" alt="${image.alt}">
        <h3>${title.textContent}</h3>
        <p>${description.textContent}</p>
      `;

      gridContainer.appendChild(element);
    });
  });

// Exemplo: Validar o formulário de contato
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();

  // Aqui você pode adicionar a lógica para enviar o formulário
});
