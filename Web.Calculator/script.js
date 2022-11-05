
        /* Numbers */
        var zeroBtn = document.getElementById('calc-zero');
        var oneBtn = document.getElementById('calc-one');
        var twoBtn = document.getElementById('calc-two');
        var threeBtn = document.getElementById('calc-three');
        var fourBtn = document.getElementById('calc-four');
        var fiveBtn = document.getElementById('calc-five');
        var sixBtn = document.getElementById('calc-six');
        var sevenBtn = document.getElementById('calc-seven');
        var eightBtn = document.getElementById('calc-eight');
        var nineBtn = document.getElementById('calc-nine');

        /* Others */
        var decimalBtn = document.getElementById('calc-decimal');
        var clearBtn = document.getElementById('calc-clear');
        var backspaceBtn = document.getElementById('calc-backspace');
        var displayValElement = document.getElementById('calc-display-val');

        /* Setting vars*/
        var displayVal = '0';
        var pendingVal;
        var evalStringArray = [];

        /* Getting Number Collection*/
        var calcNumBtns = document.getElementsByClassName('calc-btn-num');

        /* Getting  Operator Collection*/
        var calcOperatorsBtns = document.getElementsByClassName('calc-btn-operator');


        /* Display Updating Function*/
        var updateDisplayVal = (clickObj) =>{
            var btnText = clickObj.target.innerText;

            if(displayVal === '0')
                displayVal = '';

            displayVal += btnText;
            displayValElement.innerText = displayVal; 
        }

        /* Calculating Function */
        var performOperation = (clickObj) =>{
            var operator = clickObj.target.innerText;

            switch (operator) {
                case '+':
                    pendingVal = displayVal;
                    displayVal = '0';
                    displayValElement.innerText = displayVal; 
                    evalStringArray.push(pendingVal);
                    evalStringArray.push('+');
                    break;
                case '-':
                pendingVal = displayVal;
                    displayVal = '0';
                    displayValElement.innerText = displayVal; 
                    evalStringArray.push(pendingVal);
                    evalStringArray.push('-');
                    break;
                case 'x':
                    pendingVal = displayVal;
                    displayVal = '0';
                    displayValElement.innerText = displayVal; 
                    evalStringArray.push(pendingVal);
                    evalStringArray.push('*');
                    break;
                case '÷':
                pendingVal = displayVal;
                    displayVal = '0';
                    displayValElement.innerText = displayVal; 
                    evalStringArray.push(pendingVal);
                    evalStringArray.push('/');
                    break;
                case '=':
                    evalStringArray.push(displayVal);
                    var evaluation = eval(evalStringArray.join(' ')); // adds empty space between strings
                    displayVal = evaluation + '';
                    displayValElement.innerText = displayVal;
                    evalStringArray = [];
                    break;
                default:
                    break;
            }
        }


        for (let i = 0; i < calcNumBtns.length; i++){
           calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
        }

        for (let i = 0; i < calcOperatorsBtns.length; i++){
                calcOperatorsBtns[i].addEventListener('click', performOperation, false)
        }


        clearBtn.onclick = () => {
            displayVal = '0';
            pendingVal = undefined;
            evalStringArray = [];
            displayValElement.innerHTML = displayVal;
        }

        backspaceBtn.onclick = () => {
            let lengthOfDisplayVal = displayVal.length;
            displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

            if (displayVal === '')
                displayVal = '0';

            displayValElement.innerText = displayVal;
        }

        decimalBtn.onclick = () => {
            if(!displayVal.includes('.'))
                displayVal += '.';

            displayValElement.innerText = displayVal;
        }


