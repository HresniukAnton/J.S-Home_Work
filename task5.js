let enterTheCountry=prompt('Вкажіть країну');
const China='Китай', Chili='Чилі', Australia='Австралія', India='Індія', Jamaica='Ямайка';
const costOfDeliveryChina=100, costOfDeliveryChili=250, costOfDeliveryAustralia=170, costOfDeliveryIndia=80, costOfDeliveryJamaica=120;
switch (enterTheCountry) {
    case China:let ofChina= `Доставка в ${China} буде коштувати ${costOfDeliveryChina} кредитів`;
  console.log(ofChina) ;   break;
    case Chili: let ofChili=  `Доставка в ${Chili} буде коштувати ${costOfDeliveryChili} кредитів` ;
     console.log(ofChili); break;
    case Australia: let ofAustralia =  `Доставка в ${Australia} буде коштувати ${costOfDeliveryAustralia} кредитів`;
    console.log(ofAustralia); break;
    case India: let ofIndia=  `Доставка в ${India} буде коштувати ${costOfDeliveryIndia} кредитів`;
    console.log(ofIndia);break;
    case Jamaica: let ofJamaica=  `Доставка в ${Jamaica} буде коштувати ${costOfDeliveryJamaica} кредитів`;
    console.log(ofJamaica); break;
    default: let notAvailableInYourCountry= alert('У вашій країні доставка недоступна')
        break;
}