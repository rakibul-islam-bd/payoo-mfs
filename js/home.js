document.getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("add-money-input").value;
    console.log(addMoneyInput);

    const pinNumber = document.getElementById("get-pin-number").value;
    console.log(pinNumber);
    if (pinNumber === "1234") {
      console.log("adding money to your account");
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber + addMoneyNumber;
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! please try again");
    }
  });
