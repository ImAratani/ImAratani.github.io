document.addEventListener('DOMContentLoaded', function() {
    const room = document.getElementById('room');
    const player = document.getElementById('player');
    const objects = document.getElementsByClassName('object');

    const gridSize = 50;
    const roomWidth = room.clientWidth;
    const roomHeight = room.clientHeight;
    const maxPositionX = roomWidth - player.offsetWidth;
    const maxPositionY = roomHeight - player.offsetHeight;

    let playerPositionX = 0;
    let playerPositionY = 0;

    function movePlayer(x, y) {
        const newX = playerPositionX + x;
        const newY = playerPositionY + y;

        if (newX >= 0 && newX <= maxPositionX && newY >= 0 && newY <= maxPositionY) {
            player.style.left = newX + 'px';
            player.style.top = newY + 'px';
            playerPositionX = newX;
            playerPositionY = newY;
            checkInteractions();
        }
    }

    function checkInteractions() {
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            if (isColliding(player, object)) {
                console.log('Interacted with object ' + (i + 1));
            }
        }
    }

    function isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }

    const keyMap = {
        'ArrowUp': { x: 0, y: -gridSize },
        'ArrowDown': { x: 0, y: gridSize },
        'ArrowLeft': { x: -gridSize, y: 0 },
        'ArrowRight': { x: gridSize, y: 0 },
        'w': { x: 0, y: -gridSize },
        's': { x: 0, y: gridSize },
        'a': { x: -gridSize, y: 0 },
        'd': { x: gridSize, y: 0 }
    };

    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        const move = keyMap[key];

        if (move) {
            movePlayer(move.x, move.y);
        }
    });
});



