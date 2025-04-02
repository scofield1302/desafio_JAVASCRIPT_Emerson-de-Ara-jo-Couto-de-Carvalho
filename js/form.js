
function Enviar() {
    class contato {
        constructor(nome,telefone,email,mensagem){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.mensagem = mensagem;

    }
    }
    
    let nome = document.getElementById("Input_Name").value;
    let telefone = document.getElementById("Input_Telefone").value;
    let email = document.getElementById("Input_Email").value;
    let mensagem = document.getElementById("mensagem_contact").value;

    let data = new contato(nome,telefone,email,mensagem);
    
    if (!nome){
        alert("Por favor, informe o seu nome!");
        document.getElementById("Input_Name").focus();
    }
    else if (!telefone){
        alert("Por favor, informe o seu telefone!");
        document.getElementById("Input_Telefone").focus();
    }
    else if (!email){
        alert("Por favor, informe o seu E-mail!");
        document.getElementById("Input_Email").focus();
    }
    else if (!email.includes("@") || !email.includes(".") || email.includes(" ")){
        alert("Por favor, informe um e-mail válido!")
        document.getElementById("Input_Email").focus()
    }
    else if (!mensagem){
        alert("Por favor, digite a sua mensagem!")
        document.getElementById("mensagem_contact").focus()
    }
    else{

    document.getElementById("popup-contact").style.display = "block";
    document.getElementById("msg_obrigado").innerHTML = 'Obrigado sr(a) ' + data.nome + " " + '! Os seus dados foram encaminhados com sucesso.<br><br>Responderemos a você no e-mail: ' + data.email + " ou pelo telefone " + data.telefone + ".";
    
}
}
function resetForm() {
    document.getElementById('form-contact').reset();
  }

function closePopup(){
    document.getElementById("popup-contact").style.display = "none";
    resetForm();
}


