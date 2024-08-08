document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Obtém o corpo da tabela
    const tableBody = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    // Cria uma nova linha na tabela
    const newRow = tableBody.insertRow();

    // Insere células na nova linha
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Adiciona os valores às células
    cell1.textContent = name;
    cell2.textContent = phone;

    // Reseta o formulário
    document.getElementById('contactForm').reset();
});
