// осн. ДЗ

var series = {
    name: 'Игра престолов',
    releaseDate: 2011,
    mainActor: 'Питер Динклэйдж, Тирион Ланнистер',
    episodes: 40,
    moreInformation:{
        producer:'Дэвид Наттер',
        country: 'USA'
    }
}
    
var description = 'Cериал "' + series.name + '"  был выпушен ' + series.releaseDate+ ' года. ' + '\n B главных ролях ' + series.mainActor + '. В ' + series.name + series.episodes + ' эпизодов.'

console.log(description);
    


   