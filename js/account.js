// function for bring the input amount
let bringInputAmount = (amount) => {
    const inputField = document.getElementById(amount);
    const newInputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return newInputAmount;
}

// function for calculate new total amount
let calculateNewTotal = (previousAmount, amount) => {
    const previousTotal = document.getElementById(previousAmount);
    const previousTotalAmount = parseFloat(previousTotal.innerText);

    const total = amount + previousTotalAmount;
    previousTotal.innerText = total;
}

// function for getting current balance
let getCurrentBalance = () => {
    const previousBalanceTotal = document.getElementById('balanceTotal');
    const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);
    return previousBalanceAmount;
}

// function for update account balance
let updateBalance = (amount, isAdd) => {
    const previousBalanceTotal = document.getElementById('balanceTotal');
    const previousBalanceAmount = parseFloat(previousBalanceTotal.innerText);
    if (isAdd == true) {
        const balanceTotal = previousBalanceAmount + amount;
        previousBalanceTotal.innerText = balanceTotal;
    }
    else {
        const balanceTotal = previousBalanceAmount - amount;
        previousBalanceTotal.innerText = balanceTotal;
    }
}


// Deposit Operation
document.getElementById('depositBtn').addEventListener('click', () => {
    const newDepositAmount = bringInputAmount('depositField');

    if (newDepositAmount > 0) {
        calculateNewTotal('depositTotal', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});

// Withdraw Operation
document.getElementById('withdrawBtn').addEventListener('click', () => {
    const newWithdrawAmount = bringInputAmount('withdrawField');

    const currentBalanceAmount = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalanceAmount) {
        calculateNewTotal('withdrawTotal', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});