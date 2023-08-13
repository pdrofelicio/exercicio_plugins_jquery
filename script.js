$(document).ready(function() {

  $('#phone').mask('(00) 0000-00009');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');
  

  $('#registration-form').submit(function(event) {
    event.preventDefault();


    const fullName = $('#full-name').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const cpf = $('#cpf').val();
    const address = $('#address').val();
    const cep = $('#cep').val();


    console.log('Nome Completo:', fullName);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
    console.log('CPF:', cpf);
    console.log('Endereço Completo:', address);
    console.log('CEP:', cep);
  });
});
