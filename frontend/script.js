$(document).ready(function(){
    $('.fa-solid.fa-bars').click(function(){
        $('#conteudoMenu').toggle('.menuFechado');
    });
    $('#btnAdicionarFormacao').click(function(){
        var formacao = $('#inputAdicionarFormacao').val();
        var novaFormacao = $('<li>').text(formacao);
        $('#listaFormacao').append(novaFormacao);
        $('#inputAdicionarFormacao').val('');
    });
    $('#btnAdicionarProjeto').click(function(){
        var projeto = $('#inputAdicionarProjeto').val();
        var novoProjeto = $('<li>').text(projeto);
        $('#listaProjeto').append(novoProjeto);
        $('#inputAdicionarProjeto').val('');
    });
    $('#btnAdicionarPremio').click(function(){
        var premio = $('#inputAdicionarPremio').val();
        var novoPremio = $('<li>').text(premio);
        $('#listaPremio').append(novoPremio);
        $('#inputAdicionarPremio').val('');
    });
    $('#btnAdicionarCurso').click(function(){
        var curso = $('#inputAdicionarCurso').val();
        var novoCurso = $('<li>').text(curso);
        $('#listaCurso').append(novoCurso);
        $('#inputAdicionarCurso').val('');
    });
    $('#btnAdicionarIdioma').click(function(){
        var idioma = $('#inputAdicionarIdioma').val();
        var novoIdioma = $('<li>').text(idioma);
        $('#listaIdioma').append(novoIdioma);
        $('#inputAdicionarIdioma').val('');
    });

    function carregarFooter(){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'teste.txt', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                var footer = xhr.responseText;

                document.getElementById('footer').textContent = footer
            }
        };

        xhr.send();
    }

    carregarFooter();
});
