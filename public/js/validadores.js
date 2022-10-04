const formRegisterElement = document.querySelector('form');
const inputsForm = document.querySelectorAll('form input');

inputsForm.forEach((input) => {
    input.insertAdjacentHTML('afterend', '<span class="error" style="display:none">Campo Incorreto</span>');
});

function ehInputValido(name, value){
    if(!value.length){
        return false;
    }

    switch(name){
        case 'email':
            return value.length > 2 && value.length < 80;
        case 'nome':
            return value.length > 2 && value.length < 100;
        case 'sobrenome':
            return value.length > 2 && value.length < 80;
        case 'fixo':
            return value.length > 8;
        case 'celular':
            return value.length > 8;
        case 'contato':
            return value.length > 8;
        case 'endereco':
            return value.length > 8;
        case 'bairro':
            return value.length > 2;
        case 'numero':
            return value.length > 8;
        case 'nomeAbrigo':
            return value.length > 8;
        case 'emailAbrigo':
            return value.length > 8;
        case 'instagram':
            return value.length > 8;
        case 'facebook':
            return value.length > 8;
        case 'whatsapp':
            return value.length > 8;
        case 'senha':
            return value.length > 8;
        case 'confirmarSenha':
            return value.length > 8;
        default:
            return false
    }
}

formRegisterElement.onsubmit = (event) => {
    event.preventDefault()
    
    const { email, nome, sobrenome, fixo,
            celular, contato, endereco, bairro, 
            numero, nomeAbrigo, emailAbrigo, instagram,  
            facebook, whatsapp, senha, confirmarSenha } = formRegisterElement;

    const usuarioDados = { email, nome, sobrenome, fixo,
        celular, contato, endereco, bairro, 
        numero, nomeAbrigo, emailAbrigo, instagram,  
        facebook, whatsapp, senha, confirmarSenha }

    let formularioInvalido = false;

    Object.keys(usuarioDados).forEach(key => {
        const input = usuarioDados[key];
        const spanElement = input.nextElementSibling;
        const ehValido = ehInputValido(input.name, input.value.trim());

        if(!ehValido){
            formularioInvalido = true;
            spanElement.style.display = 'block';
            spanElement.innerHTML = `Campo ${input.name} vazio`

            return;
        } 

        spanElement.style.display = 'none';
        
    });

    if(formularioInvalido){
        return false;
    }
}