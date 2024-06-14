document.addEventListener('DOMContentLoaded', function () {
    //Variáveis
    var campoTexto = document.getElementById('inputTexto');
    var btnCriptografar = document.getElementById('btn-criptografar');
    var btnDescriptografar = document.getElementById('btn-descriptografar');
    var textoSaida = document.getElementById('outputTexto');
    var btnCopiar = document.getElementById('btn-copiar');
    var modal = document.getElementById('modal');
    var closeButton = document.getElementsByClassName('close')[0];
    var conteudoTextoSaida = document.querySelector('.texto-saida');
    var conteudoTextoEntrada = document.querySelector('.texto-entrada');
    
    //Função para evitar que o usuário utilize acentos e caracteres especiais
    function validarTexto(campoTexto) {
        campoTexto.addEventListener('input', function (event) {
            let valorAntigo = campoTexto.value;
            let valorNovo = valorAntigo.toLowerCase().replace(/[^\w\s]/gi, '');
            if (valorAntigo !== valorNovo) {
                campoTexto.value = valorNovo;
            }
        });
    }

    let meuTexto = document.getElementById('inputTexto');
    validarTexto(meuTexto);

    btnCriptografar.addEventListener('click', function () {
        if (!this.disabled) {
            var msgCriptografada = campoTexto.value;
            //comando para criptografar o texto
            var textoAlterado = msgCriptografada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
            textoSaida.textContent = textoAlterado;
            textoSaida.classList.add('ativo');
            conteudoTextoSaida.style.display = 'block';
            conteudoTextoEntrada.style.display = 'none';
        }
    });

    btnDescriptografar.addEventListener('click', function () {
        if (!this.disabled) {
            var msgDescriptografada = campoTexto.value;
            //comando para descriptografar o texto
            var textoAlterado = msgDescriptografada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
            textoSaida.textContent = textoAlterado;
            textoSaida.classList.add('ativo');
            conteudoTextoSaida.style.display = 'block';
            conteudoTextoEntrada.style.display = 'none';
        }
    });

    //btn copia
    btnCopiar.addEventListener('click', function () {
        if (textoSaida.value.length > 0) {
            textoSaida.select();
            document.execCommand('copy');
        }

        // Exibir o modal
        modal.style.display = 'block';

        // Esconder o modal depois de 1 segundos (1000 milissegundos)
        setTimeout(function () {
            modal.style.display = 'none';
        }, 1000);
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';        
    });

});