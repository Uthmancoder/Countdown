        let myInput1 = document.getElementById('inp1')
        let myInput2 = document.getElementById('inp2')
        showFigure = document.getElementById('showfigure')
        function countdown() {

            
            if (Number(myInput1.value) == Number(myInput2.value)) {
                alert('invalid operation')
            }
            else if (Number(myInput1.value) < Number(myInput2.value)) {
                alert('invalid operation')
            }
            else if (Number(myInput1.value) > Number(myInput2.value)) {
                let me = setInterval(() => {
                    Number(myInput1.value--)
                    console.log(myInput1.value);
                    showFigure.innerHTML = myInput1.value
                    if (Number(myInput1.value) == Number(myInput2.value)) {
                        clearInterval(me)
                        setTimeout(() => {
                            alert('time out')
                        }, 1000);
                    }
                }, 1000);
            }
        }