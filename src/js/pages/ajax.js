let handleAjax = function(options){

$('#GetData').on('click', function(e){
  
     let requestData = {
         productId: 1

     };
     let GetDataBtn = $(this);
     
     $.ajax({
     
     async: true,   
     crossDomain: true,
     url: 'products.json',
     method: 'GET' ,
     contentType: 'application/json',
      headers:{
              'Access-Control-Allow-Origin': '*'   

     },
    
     data: JSON.stringify(requestData),
      beforeSend: function(){
          $('body.ajax-body').prepend('<div id="loader">LOADING....</div>');
         GetDataBtn.prop('disabled', true);
      },
      success: function(data){
               console.log(data);

      },

     error: function(xhr){       //o ajax xml-u response ...status kodovi
      console.log(xhr);
     },

     complete: function(){
         setTimeout(function(){
            $('#loader').empty();            //remove()
           GetDataBtn.prop('disabled', false);

     },1000); 

     }
});
});
};