// ---Inputvalue
function getValueFromInput(id) {
    const input = document.getElementById(id)
    const value = input.value
    console.log(id, value)
    return value;
}


// --blance 

function getBlance() {
    const currentBlance = document.getElementById('current-balance')
    const balance = currentBlance.innerText
    console.log('current-balance',Number(balance));
    return Number(balance);
}

// --setBlance

function addBlance(value){
    const currentBlance = document.getElementById('current-balance')
    currentBlance.innerText = value;
}