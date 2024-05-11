// Aqui você pode adicionar a lógica JavaScript para tornar o site mais dinâmico

// Exemplo: Obter dados dos elementos em destaque de uma API
fetch('https://moedasdigitais.net')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('.grid-container');

    data.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('f-posts-shortcode');
      element.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
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
