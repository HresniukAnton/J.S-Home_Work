const credits=23580;
const pricePerDroid=300;

let amount= prompt('Скільки ви бажаєте купити?')
 
if (amount==null){
    console.log('Скасовано користувачем!')
} else {
   const TotalPrice = pricePerDroid*amount;
   if (TotalPrice>credits){
    console.log('Недостатньо коштів на рахунку!')
   }else {
    const creditsLeftOnTheAccount = credits-pricePerDroid*amount;
    console.log(`Ви купили ${amount} дроїдів, на рахунку залишилося ${creditsLeftOnTheAccount} кредитів.`);
    
   }
   }
