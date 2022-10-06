
$(document).ready(function() {
    $('#telefone').mask('(11) 0000-0000', {
    placeholder: '(XX) XXXX-XXXX'
})

$('#celular').mask('(00) 00000-0000', {
    placeholder: '(XX) XXXXX-XXXX'
    })

$('#cpf').mask('999.999.999-99', {
    placeholder: 'Sem pontos ou traços'
    })

$('#cep').mask('99999')
$('#cep2').mask('999')

})
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        celular: {
            required: true
        },

        cpf: {
            required: true
        },
        cep: {
            required: true
        },
        cep2: {
            required: true
        }
    
},

    messages: {
        nome: '*Por favor, insira um nome válido', 
        email: '*exemplo@exemplo.com.br',
        telefone: '*',
        celular: '*',
        cpf: '*Digite um cpf válido',
        cep: '*',
        cep2: '*'

    },
    submitHandler: function(form) {
        alert('Informações computadas com sucesso')
        $('#form-valid').each (function(){ this.reset(); })
    },

    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }

})

