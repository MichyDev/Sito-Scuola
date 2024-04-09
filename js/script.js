document.addEventListener("DOMContentLoaded", function() {
    console.log("Il documento è stato completamente caricato.");
    var readMoreBtns = document.querySelectorAll('.read-more-btn');
    console.log("Numero di pulsanti 'Leggi di più' trovati:", readMoreBtns.length);


    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            console.log("Hai cliccato su un pulsante 'Leggi di più'");

            var additionalContent = this.nextElementSibling;


            additionalContent.classList.toggle('show');

            if (additionalContent.classList.contains('show')) {
                this.textContent = 'Mostra meno';
            } else {
                this.textContent = 'Leggi di più';
            }
        });
    });
});
