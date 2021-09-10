let backgroundChangeText = document.getElementById('backgroundInput');
let textSelector = document.getElementById('paragraphp')
let textSelectorH1 = document.getElementById('paragraphh1')

backgroundChangeText.addEventListener('keyup', backgroundChangerFunction);

function backgroundChangerFunction(){
    let backgroundChangeText = document.getElementById('backgroundInput');
    if (backgroundChangeText.value ==""){
        backgroundChangeText.style.backgroundColor = 'white'
    }else {
        document.body.style.background = backgroundChangeText.value;
    }
    
}


