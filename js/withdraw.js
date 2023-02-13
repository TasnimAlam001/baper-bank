document.getElementById('withdraw-btn').addEventListener('click',function(){

    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawAmountString = inputWithdraw.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    inputWithdraw.value= '';

    if(isNaN(withdrawAmount)){
        alert('Please input a Number');
        return;
    }

    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawString = totalWithdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    

    

    //Minus from total ammount.....


    const totalbalance = document.getElementById('total-balance');
    const balanceAmmountString = totalbalance.innerText;
    const balanceAmmount = parseFloat(balanceAmmountString);

    if(withdrawAmount> balanceAmmount){
        alert('Baper Bank a atto tk nai');
        return;
    }

    const updateWithdraw = withdrawAmount + previousWithdraw;
    totalWithdraw.innerText = updateWithdraw;

    const upadateTotalbalance = balanceAmmount - withdrawAmount;
    totalbalance.innerText= upadateTotalbalance;

    


})