document.getElementById('heroForm').onsubmit = function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos inputs
    const heroName = document.getElementById('nameHero').value;
    const heroXP = parseInt(document.getElementById('xp').value);

    // Inicializa a variável nivel
    let nivel;

    // Classifica o nível do herói
    if (heroXP < 1000) {
        nivel = 'Ferro';
    } else if (heroXP >= 1001 && heroXP <= 2000) {
        nivel = 'Bronze';
    } else if (heroXP >= 2001 && heroXP <= 5000) {
        nivel = 'Prata';
    } else if (heroXP >= 5001 && heroXP <= 7000) {
        nivel = 'Ouro';
    } else if (heroXP >= 7001 && heroXP <= 8000) {
        nivel = 'Platina';
    } else if (heroXP >= 8001 && heroXP <= 9000) {
        nivel = 'Ascendente';
    } else if (heroXP >= 9001 && heroXP <= 10000) {
        nivel = 'Imortal';
    } else {
        nivel = 'Radiante';
    }

    // Atualiza o texto no modal
    document.getElementById('modalResult').innerText = `O herói de nome ${heroName} está no nível de ${nivel}.`;

    // Abre o modal
    const modal = document.getElementById('myModal');
    modal.showModal();
}

// Fecha o modal quando o usuário clicar no "x"
document.querySelector('.close').onclick = function() {
    const modal = document.getElementById('myModal');
    modal.close();
}


