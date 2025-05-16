document.getElementById('animeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os dados do formulário
    const animeName = document.getElementById('animeName').value;
    const animeGenre = document.getElementById('animeGenre').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const rating = document.getElementById('rating').value;

    // Cria uma nova linha na tabela
    const table = document.getElementById('animeTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${animeName}</td>
        <td>${animeGenre}</td>
        <td>${releaseYear}</td>
        <td>${rating}</td>
    `;

    // Limpa os campos do formulário
    document.getElementById('animeForm').reset();
});