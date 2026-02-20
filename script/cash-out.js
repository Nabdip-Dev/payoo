

// machine connect==

const withdrawBtn = document.getElementById('withdraw-btn')
.addEventListener('click',function(){

    // step-1
    const number = getValueFromInput('agent-number')
   if (number.length !== 11) {
    alert('Number must be 11 digits');
    }
    // step-2
    const amount = getValueFromInput('cashout-amount')

    //step-3
    const currentBlance = getBlance()
    // step-4
    const newBlance = currentBlance - Number(amount)
    console.log(newBlance)

    if(newBlance<0){
        alert('invalid amount');
        return;
    }

    // step-5
    const pin = getValueFromInput('withdraw-pin')
    if(pin === '1234'){
        alert('cashout done')
        addBlance(newBlance)
    }else{
        alert('incorrect pin')
    }
})













// const withdrawBtn = document.getElementById('withdraw-btn')
//     .addEventListener('click', function () {

//         //step-1
//         const agentNumber = document.getElementById('agent-number')
//         const agentNumberValue = agentNumber.value
//         console.log(agentNumberValue)

//         //step-2
//         const cashoutAmount = document.getElementById('cashout-amount')
//         const cashoutAmountValue = cashoutAmount.value
//         console.log(cashoutAmountValue)

//         //step-3
//         const currentBlance = document.getElementById('current-balance')
//         const currentBlanceIn = currentBlance.innerText
//         console.log(currentBlanceIn)

//         // step-4
//         const newBlance = Number(currentBlanceIn) - Number(cashoutAmountValue)
//         console.log(newBlance)
        
//         if(newBlance<0){
//             alert('invalid amount');
//            return;
//         }

//         // step-5
//         const withdrawPin = document.getElementById('withdraw-pin')
//         const withdrawPinValue = withdrawPin.value
//         if(withdrawPinValue === '1234'){
//             alert('cashout done')
//             currentBlance.innerText = newBlance
//         }else{
//             alert('incorrect pin')
//         }
//     })