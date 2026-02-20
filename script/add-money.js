// machine connect==

const addMoneyBtn = document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        // step-1
        const bankSelect = getValueFromInput('select-bank')
        console.log(bankSelect)
        if (bankSelect == 'Select Bank') {
            alert('Please Select Your Bank Name')
            return;
        }

        // step-2
        const number = getValueFromInput('bank-number')
        if (number.length !== 11) {
            alert('Number must be 11 digits');
        }

        // step-3
        const amount = getValueFromInput('add-amount')
        const currentBlance = getBlance()

        // step-4
        const newBlance = currentBlance + Number(amount)
        console.log(newBlance)

        if (newBlance < 0) {
            alert('invalid amount');
            return;
        }

        // step-5
        const pin = getValueFromInput('add-money-pin')
        if (pin === '1234') {
            alert('addmoney  done')
            addBlance(newBlance)
        } else {
            alert('incorrect pin')
        }
    })
