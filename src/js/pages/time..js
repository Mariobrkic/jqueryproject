let handleTime = function(options){

    $('body.time-body').append('<div class="clock"></div>');

    clock();

    setInterval(clock,1000);

   function clock(){

    let date = new  Date();
    let hh = (date.getHours() < 10) ? ('0' + date.getHours()) : date.getHours();
    let mm = (date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes();
    let ss = (date.getSeconds() < 10) ? ('0' + date.getSeconds()) : date.getSeconds();
    //let time = date.getTime();

    $('.clock').text(hh + ':' + mm + ':' + ss);

    }
   
let date = '2019-06-04T18:39:59+02:00';

console.log(moment(date).format('DD.MM.YYYY'));

};


