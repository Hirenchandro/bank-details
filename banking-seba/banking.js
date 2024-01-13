//deposite submit button
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeInputMoney = depositeInput.value;
    if(depositeInputMoney>0){

        const depositeMoney = document.getElementById('deposite-total');
    
    const totalDeposite = parseFloat(depositeMoney.innerText) + parseFloat(depositeInputMoney);
    depositeMoney.innerText = totalDeposite;
//Balance section calculation
    const BalanceMoney = document.getElementById('balance-total');

    const totalBalance = parseFloat(BalanceMoney.innerText) + parseFloat(depositeInputMoney);

    
    BalanceMoney.innerText = totalBalance;


    depositeInput.value = "";

    }

    else{
        const depositeInput = document.getElementById('deposite-input');
        depositeInput.value ='Invalid input';

    }
    
   
})

//Withdraw section

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputMoney= parseFloat(withdrawInput.value);
    const totalWithdraw = document.getElementById('withdraw-total');


    const BalanceMoney = document.getElementById('balance-total');
    const totalBalanceMoney = parseFloat(BalanceMoney.innerText);

    if(withdrawInputMoney<=totalBalanceMoney && withdrawInputMoney>0){

        totalWithdraw.innerText = parseFloat(totalWithdraw.innerText) + withdrawInputMoney;
        BalanceMoney.innerText = totalBalanceMoney - withdrawInputMoney;

        withdrawInput.value ="";

    }
    else if(withdrawInputMoney==0){
        withdrawInput.value ="Invalaid Balance";
    }
    else{
        withdrawInput.value ="Not Enough Balance";
    }

    




})

