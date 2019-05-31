let handleLogin = function(options){
    let loginForm = $(options.loginForm);

    $('#loginForm input').on('focus', function(e){
        e.preventDefault();
        $(this).addClass('text-danger');                                  //dodali klasu u html head


        $(this).animate({
            'width': '250px'

        },1000,function(){
           
            


    });


      //  $(this).css({
     //         'width':          '250px'
     //        'box-shadow':    '0 0 3px #462677'
     //          });
    });
    
    $('#loginForm input').on('blur', onInputBlur);
    function onInputBlur(e){                                      // let onInputBlur = function(e)
        e.preventDefault();

        let elementName = $(this).attr('name');                       //returnati vrijednost atributa
        console.log(elementName);

        $(this).animate({
            'width':'200px'   

        },1000);
        
        

        if($(this).hasClass('text-danger')){
            console.log('Imaaaa!');
        } else {   
             console.log('nemaaaa');

        }


    }
    
      //  $(this).removeClass('text-dange');
   




    loginForm.on('submit', function(e){
          e.preventDefault();

          //let formData = $(this).serialize();
          // let formData = $(this).serializeArray();
          //let formData = new FormData($(this)[0]);
          
          let formData = $(this).getFormData()
          console.log(formData);
        //  loginForm.off('submit');
})


};
