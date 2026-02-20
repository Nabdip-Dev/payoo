console.log('Hello World')
const button = document.getElementById('btn')
    .addEventListener('click', function () {
        console.log('Done')

        // step-2 input Number call
        const inputNumber = document.getElementById('input-number')
        const nubValue = inputNumber.value
        // console.log(nubValue)

        // step-3 input pin call
        const inputPin = document.getElementById('input-pin')
        const pinValue = inputPin.value
        // console.log(pinValue)

        let errorMessage = "";

        // Number length check
        if (nubValue.length !== 11) {
            errorMessage += "Invalid Number";
        }

        // PIN length check
        if (pinValue.length !== 4) {
            if (errorMessage !== "") {
                errorMessage += " and ";
            }
            errorMessage += "Invalid PIN";
        }

        // যদি কোনো error থাকে
        if (errorMessage !== "") {
            alert(errorMessage);
            return;
        }

        // step-4 
        if (nubValue === "01234567890" && pinValue === "1234") {
            alert("Value done");
            window.location.href = "home.html";
        }

        else if (nubValue !== "01234567890" && pinValue !== "1234") {
            alert("Incorrect Number and PIN");
        }

        else if (nubValue !== "01234567890") {
            alert("Incorrect Number");
        }

        else {
            alert("This PIN is not correct for this number");
        }



    })

