// document.getElementById('select').addEventListener('click', function () {
//    const playerName = document.getElementById('messi'); 
//    const playerMessi = playerName.value;
   
// });

function calculated() {
   const playerValue = document.getElementById('player-value');
   const playerValueString = playerValue.value;
   const playerValueAmount = parseInt(playerValueString);
   const calculate = playerValueAmount * 5;
   return calculate;
};

document.getElementById('calculate').addEventListener('click',function claculateExpenses(){

   const expenses = document.getElementById('expenses');
   expenses.innerText = calculated();
   return expenses;
   
});

document.getElementById('calculate-total').addEventListener('click', function () {
   const manager = document.getElementById('manager');
   const managerString = manager.value;
   const managerAmount = parseInt(managerString);

   const coch = document.getElementById('coch');
   const cochString = coch.value;
   const cochAmount = parseInt(cochString);

   const calculateTotal = managerAmount + cochAmount + calculated();;

   const totalAmount = document.getElementById('total');
   totalAmount.innerText = calculateTotal;

});