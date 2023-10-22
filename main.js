const billInput = document.querySelector('.bill');
const numberInput = document.querySelector('.peopleNumber');
const numbers = document.querySelectorAll('.number');
const customInput = document.querySelector('.custom');
const tipAmount = document.querySelector('.tipAmount');
const total = document.querySelector('.total');
const resetButton = document.querySelector('.reset');
const errorMessage1 = document.querySelector('.errorMessage1');
const errorMessage2 = document.querySelector('.errorMessage2');



let percentage = 0
let tipAmountValue = 0
let totalValue = 0
let billInputValue = 0
let numberInputValue = 0
let isPercentage = false
let isBillInput = false
let isNumberInput = false



numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        percentage = parseFloat(e.target.value);      
        if(percentage!=0 && typeof(percentage)== 'number'){
            isPercentage = true
        } 
        
        load()
        
        return percentage;
    })
});



const load = () => {

    customInput.addEventListener('input', (e) => {
        percentage = parseFloat(e.target.value);
        if(percentage!=0 && typeof(percentage)== 'number'){
            isPercentage = true
        }
        
        load()
        
        return percentage;   
        console.log(percentage)
        console.log(typeof(percentage))
    })

    if(billInput.value!=0 && typeof(billInput.value)=='string'){
        isBillInput = true
        billInputValue = billInput.value
        billInput.classList.remove('error')
        errorMessage1.classList.remove('error')
    } else{
        billInput.classList.add('error')
        errorMessage1.classList.add('error')
        
    }
    //CALCULATION
    if (numberInput.value!=0 && typeof(numberInput.value)=='string') {
        isNumberInput = true
        numberInputValue = numberInput.value
        numberInput.classList.remove('error')
        errorMessage2.classList.remove('error')
    } else{
        numberInput.classList.add('error')
        errorMessage2.classList.add('error')
    }
    if(isBillInput && isPercentage && isNumberInput){
        tipAmountValue = (billInputValue*(percentage/100)/numberInputValue)
        tipAmount.innerHTML = `$${(tipAmountValue.toPrecision(3))}`

        totalValue = (billInputValue/5) + tipAmountValue
        total.innerHTML = `$${(totalValue.toPrecision(4))}`
       
    }

    if (totalValue!=0 && tipAmountValue!=0) {
        resetButton.classList.add('completed')
     }
     
    
}



resetButton.addEventListener('click', () => {
    location.reload()
    // percentage = 0
    // tipAmountValue = 0
    // tipAmount.innerHTML = '$0.00'
    // totalValue = 0
    // total.innerHTML = '$0.00'
    // billInput.value = ''
    // numberInput.value = ''
    // isPercentage = false
    // isBillInput = false
    // isNumberInput = false

})

