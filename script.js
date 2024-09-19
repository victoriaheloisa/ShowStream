// Seleciona todos os cards e o modal
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('movie-modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

//imagem
const modalImage = document.getElementById('modal-image');


// Verifica se os elementos foram encontrados
if (!modal || !modalClose || !modalTitle || !modalDescription) {
    console.error('Um ou mais elementos necessários para o modal não foram encontrados.');
}

// Adiciona evento de clique a cada card
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Obtém informações do card clicado
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        const imageSrc = this.querySelector('img').getAttribute('src');

        if (title && description) {
            // Preenche o modal com as informações
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.setAttribute('src', imageSrc);

            // Exibe o modal
            modal.style.display = 'flex';
        } else {
            console.error('O card clicado não contém os atributos necessários.');
        }
    });
});

// Adiciona evento de clique ao botão de fechar do modal
if (modalClose) {
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener('click', function(event) {
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});