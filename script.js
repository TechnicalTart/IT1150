var selectedHead = document.getElementById("layerA");
var selectedEyes = document.getElementById("layerC");
var selectedMouth = document.getElementById("layerE");

function selectHead(headId) {
    selectedHead = document.getElementById(headId);
    applyLayers();
}

function selectEyes(eyesId) {
    selectedEyes = document.getElementById(eyesId);
    applyLayers();
}

function selectMouth(mouthId) {
    selectedMouth = document.getElementById(mouthId);
    applyLayers();
}

function applyLayers() {
    var allLayers = document.querySelectorAll(".emoji-container img");
    allLayers.forEach(layer => {
        if (layer === selectedHead || layer === selectedEyes || layer === selectedMouth) {
            layer.style.display = "block";
        } else {
            layer.style.display = "none";
        }
    });
}