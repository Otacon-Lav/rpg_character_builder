function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

function loadCharacterList() {
    const characterList = document.getElementById('character-list');
    const characters = JSON.parse(localStorage.getItem('characters')) || [];

    characterList.innerHTML = '';

    if (!characters.length) {
        characterList.innerHTML = '<p>Nessun personaggio salvato.</p>';
        return;
    }

    characters.forEach((character, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${character.avatar}" alt="Avatar di ${character.nome} ${character.cognome}" style="width: 45px; height: 45px;">
            <span>${character.nome} ${character.cognome}</span>
        `;
        listItem.style.cursor = 'pointer';

        listItem.addEventListener('click', function() {
            showCharacterPreview(character);
        });

        characterList.appendChild(listItem);
    });
}

function showCharacterPreview(character) {
    document.getElementById('preview-avatar').src = character.avatar;
    document.getElementById('preview-nome').textContent = character.nome;
    document.getElementById('preview-cognome').textContent = character.cognome;
    document.getElementById('preview-genere').textContent = character.genere;
    document.getElementById('preview-eta').textContent = character.eta;
    document.getElementById('preview-razza').textContent = character.razza;
    document.getElementById('preview-occupazione').textContent = character.occupazione;
    document.getElementById('preview-classe').textContent = character.classe;
    document.getElementById('preview-specializzazione').textContent = character.specializzazione;
    document.getElementById('preview-descrizione-fisica').textContent = character.descrizioneFisica;
    document.getElementById('preview-descrizione-personalita').textContent = character.descrizionePersonalita;
    document.getElementById('preview-headcanons').textContent = character.headcanons;
    document.getElementById('preview-update-storia').textContent = character.updateStoria;

    document.getElementById('character-preview').style.display = 'block';
}

function hideCharacterPreview() {
    document.getElementById('character-preview').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadCharacterList);
