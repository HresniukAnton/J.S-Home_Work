const  ADMIN_PASSWORD='jqueryismyjam';
let massage;
 let password=prompt('User Password')
 
 if (password == null){
    massage = 'Скасовано користувачем!';
 }else if(password=='jqueryismyjam'){
    massage='Ласкаво просимо!';
 }else {
    massage='Доступ заборонений, невірний пароль!';
 }

 console.log(massage)