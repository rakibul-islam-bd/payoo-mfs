document.getElementById('btn-add-money').addEventListener('click', function (event){
event.preventDefault();

const addMoneyInput = document.getElementById('add-money-input').value;
console.log(addMoneyInput);

const pinNumber = document
.getElementById('get-pin-number').value;
console.log(pinNumber);
})