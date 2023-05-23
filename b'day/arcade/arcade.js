document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const stepSize = 50;
    const gridWidth = 16;
    const gridHeight = 8;
    const mapWidth = gridWidth * stepSize;
    const mapHeight = gridHeight * stepSize;

    let characterX = stepSize;
    let characterY = stepSize;
    let hasInteracted = false;
    let isKarinaFollowing = true;

    function moveCharacter(event) {
        const key = event.key.toLowerCase();
        const directions = {
            w: [0, -1], // Up
            s: [0, 1], // Down
            a: [-1, 0], // Left
            d: [1, 0], // Right
        };

        if (key in directions) {
            const [dx, dy] = directions[key];
            const newCharacterX = characterX + dx * stepSize;
            const newCharacterY = characterY + dy * stepSize;

            // Verifica que el personaje no salga de los límites del cuadrado contenedor
            if (
                newCharacterX >= 0 && // Límite izquierdo
                newCharacterX < mapWidth - stepSize && // Límite derecho
                newCharacterY >= 0 && // Límite superior
                newCharacterY < mapHeight - stepSize * 2 // Límite inferior
            ) {
                characterX = newCharacterX;
                characterY = newCharacterY;

                character.style.top = characterY + 'px';
                character.style.left = characterX + 'px';

                if (hasInteracted && isKarinaFollowing) {
                    const karinaObject = document.getElementById('karina-object');
                    karinaObject.style.display = 'block';
                    const objectOffsetX = dx * -1; // Offset en el eje X
                    const objectOffsetY = dy * -1; // Offset en el eje Y
                    const newObjectX = characterX + objectOffsetX * stepSize;
                    const newObjectY = characterY + objectOffsetY * stepSize;
                    karinaObject.style.top = newObjectY + 'px';
                    karinaObject.style.left = newObjectX + 'px';
                }
            }
        }
    }

    window.addEventListener('keydown', moveCharacter);

    const map = document.getElementById('map');
    map.style.width = mapWidth + 'px';
    map.style.height = mapHeight + 'px';

    for (let row = 0; row < gridHeight; row++) {
        for (let col = 0; col < gridWidth; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            map.appendChild(tile);
        }
    }

    const objects = document.getElementsByClassName('object');
    for (let i = 0; i < objects.length; i++) {
        objects[i].addEventListener('click', interact);
    }

    function interact() {
        if (this.id === 'karina-object') {
            openModal('Feliz cumpleaños!', 'Te quiero', 'Deberías descansar');
        } else if (this.id === 'lit-object') {
            const litObject = document.getElementById('lit-object');
            litObject.addEventListener('click', toggleLight);

            function toggleLight() {
                litObject.classList.toggle('off');
                map.classList.toggle('dark');

                const objects = document.getElementsByClassName('object');
                for (let i = 0; i < objects.length; i++) {
                    objects[i].classList.toggle('off');
                }
            }
        } else if (this.id === 'top-object') {
            const litObject = document.getElementById('lit-object');
            if (litObject.classList.contains('off')) {
                alert('Hay una nota sobre el escritorio, pero está demasiado oscuro para leer.');
            } else {
                alert('Hay una lista de la compra sobre el escritorio');
                const shoppingList = document.getElementById('shopping-list');
                shoppingList.classList.remove('hidden');
            }
        } else {
            alert('Object clicked!');
            hasInteracted = true;
        }
    }

    document.getElementById('close-list-button').addEventListener('click', () => {
        const shoppingList = document.getElementById('shopping-list');
        shoppingList.classList.add('hidden');
    });

    function openModal(title, option1, option2) {
        const modal = document.getElementById('modal');
        const modalTitle = modal.querySelector('.modal-title');
        const modalMessage = modal.querySelector('.modal-message');
        const modalOptions = modal.querySelector('.modal-options');

        modalTitle.textContent = '';
        modalMessage.textContent = 'Feliz cumpleaños!';

        modalOptions.innerHTML = '';

        const optionButton1 = document.createElement('button');
        optionButton1.textContent = option1;
        optionButton1.addEventListener('click', () => {
            closeModal();
        });
        modalOptions.appendChild(optionButton1);

        const optionButton2 = document.createElement('button');
        optionButton2.textContent = option2;
        optionButton2.addEventListener('click', () => {
            closeModal();
            isKarinaFollowing = false;
        });
        modalOptions.appendChild(optionButton2);

        modal.style.display = 'block';
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    const karinaObject = document.getElementById('karina-object');
    karinaObject.addEventListener('click', interact);
});












