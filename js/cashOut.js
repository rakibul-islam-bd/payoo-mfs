document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    console.log(cashOut)

    const pinNumber = document.getElementById('cash-out-pin').value;
    console.log(pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;

        const cashOutNumber = parseFloat (cashOut);
        const balanceMain = parseFloat (balance);

        console.log(cashOutNumber, balanceMain);

      const  cashOutAfterBlnce = balanceMain - cashOutNumber;
      document.getElementById('account-balance').innerText = cashOutAfterBlnce;
    }
   else{ 
    alert('Invalid pin and value');
   }

})