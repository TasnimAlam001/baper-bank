document.getElementById('diposit-btn').addEventListener('click',function(){

    const depositeField = document.getElementById('inpt-diposit');
    const depositeAmmountstring = depositeField.value;
    const depositeAmmount = parseFloat(depositeAmmountstring);
    depositeField.value = '';
    
    if(isNaN(depositeAmmount)){
        alert('Please input a Number');
        return;
    }


    const previousDeposite = document.getElementById('update-deposit');
    const previousDepositeString = previousDeposite.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeString);


    const totalDeposit = previousDepositeAmount + depositeAmmount;
    previousDeposite.innerText = totalDeposit;

    // for totat ammount section.....

    const totalbalance = document.getElementById('total-balance');
    const balanceAmmountString = totalbalance.innerText;
    const balanceAmmount = parseFloat(balanceAmmountString);

    const upadateTotalbalance = balanceAmmount + depositeAmmount;
    totalbalance.innerText= upadateTotalbalance;



    

})