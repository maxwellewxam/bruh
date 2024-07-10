function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    terrariumElement.ondblclick = bringToFront;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

    function bringToFront() {
        terrariumElement.style.zIndex = parseInt(terrariumElement.style.zIndex || 0) + 1;
    }
}


function resetPlants() {
    const plants = document.querySelectorAll('.draggable');
    plants.forEach(plant => {
        plant.style.top = '';
        plant.style.left = '';
    });
}

dragElement(document.getElementById('egg1'));
dragElement(document.getElementById('egg2'));
dragElement(document.getElementById('egg3'));
dragElement(document.getElementById('egg4'));
dragElement(document.getElementById('egg5'));
dragElement(document.getElementById('egg6'));