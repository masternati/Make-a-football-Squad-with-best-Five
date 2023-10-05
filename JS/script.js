// document.getElementById('select').addEventListener('click', function () {
//    const playerName = document.getElementById('messi'); 
//    const playerMessi = playerName.value;
   
// });

document.getElementById('calculate').addEventListener('click',function claculateExpenses(){
   const playerValue = document.getElementById('player-value');
   const playerValueString = playerValue.value;
   const playerValueAmount = parseInt(playerValueString);

   const calculate = playerValueAmount * 5;

   const expenses = document.getElementById('expenses');
   expenses.innerText = calculate;
   return expenses;
   
});
