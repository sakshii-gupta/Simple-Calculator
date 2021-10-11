let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ''; //value that we will display on screen 
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'Del'){
            screen.value = screen.value.slice(0,-1);
        }
        else if (buttonText == 'Cl'){
            screenValue = '';
            screen.value = '';
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}