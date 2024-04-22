document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("seu-backend-para-enviar-email.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar o formulário.");
            }
            return response.text();
        })
        .then(data => {
            // Manipular a resposta do servidor, se necessário
            console.log("Resposta do servidor:", data);
            // Ou redirecionar o usuário para uma página de confirmação
            // window.location.href = "pagina-de-confirmacao.html";
        })
        .catch(error => {
            console.error("Erro ao enviar o formulário:", error);
            // Manipular erros, exibir uma mensagem de erro para o usuário, etc.
        });
    });
});