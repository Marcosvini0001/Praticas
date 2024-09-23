document.getElementById('btn-adicionar').addEventListener('click', function() {
    const tarefaTexto = document.getElementById('text').value;
});


document.querySelectorAll('.btn-deletar').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.div-tarefa').remove();
    });
});


/*document.getElementById('btn-adicionar').addEventListener('click', function() {
    const tarefaTexto = document.getElementById('text').value;
    const spanMensagem = document.getElementById('span-mensagem');
    
    if (tarefaTexto.trim() === '') {
        // Mostra o span se o input estiver vazio
        spanMensagem.style.display = 'block';
    } else {
        // Esconde o span caso haja texto e pode prosseguir
        spanMensagem.style.display = 'none';

        // Aqui você pode adicionar a lógica para adicionar a tarefa
        console.log('Adicionar tarefa:', tarefaTexto);
    }
}); */
