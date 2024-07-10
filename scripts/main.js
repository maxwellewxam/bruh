document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll('.draggable');
    const locations = document.querySelectorAll('.location');
    const eggs = document.getElementById('eggsInPlace');


    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    locations.forEach(location => {
        location.addEventListener('dragover', dragOver);
        location.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggable = document.getElementById(id);
        if (!e.target.hasChildNodes()) {
            e.target.appendChild(draggable);
            draggable.style.position = 'absolute';
            draggable.style.top = '0';
            draggable.style.left = '0';
            checkWin();
        }
    }

    function checkWin() {
        eggs.textContent++;
        if (eggs.textContent === '6') {
            alert("Congratulations! You've placed all the eggs!");
        }
    }

    // Timer
    const timerElement = document.getElementById('time');
    timerElement.textContent = 0;
    setInterval(() => {
        if (eggs.textContent != '6') {
            timerElement.textContent++;
        }
    }, 1000);
});

function resetGame() {
    const eggContainer = document.getElementById('egg-container');
    const eggs = document.querySelectorAll('.draggable');
    eggs.forEach(egg => eggContainer.appendChild(egg));
    const eggsInPlace = document.getElementById('eggsInPlace');
    eggsInPlace.textContent = 0;
    const timerElement = document.getElementById('time');
    timerElement.textContent = 0;
}
