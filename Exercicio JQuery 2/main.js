$(document).ready(function() {
$('form').on('reset', function(e) {
    e.preventDefault();
    const tarefaAserAdicionada = $('#adicionarTarefa').val();
    const novaTarefa = $('ul');
    $(`<li style="display:none;"><label title="Clique para concluir">
    ${tarefaAserAdicionada}</label></li>`).appendTo(novaTarefa);
    $('li').slideDown();
    $('#adicionarTarefa').val('');
    $('li').click(function() {
    $(this).css('text-decoration', 'line-through');

})
})
})




















