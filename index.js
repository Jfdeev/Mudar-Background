const cor = document.getElementById('cor');
const mudarCor = document.getElementById('btn');

mudarCor.addEventListener('click', function(){
    document.body.style.backgroundColor = cor.value;
});