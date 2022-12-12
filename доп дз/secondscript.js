// доп ДЗ
var dayOfTheWeek = prompt('Bведите день недели на англиском');

var result = '';

switch(dayOfTheWeek){
    case 'Monday':
    case 'monday':
        result = 'Понидельник';
        break;

    case 'Tuesday':
    case 'tuesday':
        result = 'Вторник';
        break;

    case 'Wednesday':
    case 'wednesday':
        result='Среда'
        break;
        
    case 'Thursday':
    case 'thursday':
        result='Четверг';
        break;  

    case 'Friday':
    case 'friday':
        result='Пятница'
         break; 
         
    case 'Saturday':
    case 'saturday':
        result='Субботта';
        break;

    case 'Sunday':
    case 'sunday':
        result='Воскрнье';
        break;          
default:
    result = 'Что-то пошло не так'
}


alert(result)
console.log(result);