const form = document.getElementById('form-poupanca');
const prazo = document.getElementById(innerHTML='prazo');
const aporte = document.getElementById(innerHTML='aporte');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (aporte.value <= prazo.value) {
        alert("o valor aplicado precisa ser maior que o prazo");
    } else {
        alert("Parabés, sua aplicação foi realizada com sucesso");
        prazo.value = '';
        aporte.value = '';
    }
})

console.log(form);

