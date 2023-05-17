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
                newCharacterX < mapWidth && // Límite derecho
                newCharacterY >= 0 && // Límite superior
                newCharacterY < mapHeight  // Límite inferior
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
        alert('Object clicked!');
        hasInteracted = true;
        // Aquí puedes agregar tu lógica para la interacción con el objeto
    }

    function handleKarinaObjectClick() {
        const shouldStopFollowing = confirm('¿Qué acción deseas realizar con karina-object?\n\n- Cancelar: No hacer nada\n- Aceptar: Dejar de seguir al personaje');

        if (shouldStopFollowing) {
            isKarinaFollowing = false;
        } else {
            isKarinaFollowing = true;
        }
    }

    const karinaObject = document.getElementById('karina-object');
    karinaObject.addEventListener('click', handleKarinaObjectClick);
});










