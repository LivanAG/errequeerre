$(function(){

    $("#card-body")



       $("#form").on("submit",function(e){
       e.preventDefault();
       parametros = new FormData(this);
       parametros.append('action',"editar");


       

       
   

     $.confirm({
        theme: 'material',
        title: 'Vender Zukos',
       
    
        content: 'Esta a punto de realizar una venta de zukos. Desea Continuar?',
    
        columnClass:"small",
        typeAnimated:true,
        cancelButtonClass:'btn-primary',
        draggable:true,
    
        buttons: {
            info: {
                text:'si',
                btnClass: 'btn-blue',
                action: function(){
    
                    
                    $.ajax({
                        url:window.location.pathname,
                        type:"POST",
                        data:parametros,
                        dataType:'json',
                        processData: false,  // este parametro es obligado ponerlo cuando usas FormData
                        contentType: false   // este parametro es obligado ponerlo cuando usas FormData
                        
                
                
                     }).done(function(data) {
                
                         if(!data.hasOwnProperty('error')){
                             location.href =url_ok;
                         
                         return false;
                         }
                         else{
                         console.log(data.error)
                         
                         
                         
                         }
                         
                         
                     }).fail(function( jqXHR,textStatus,errorThrown) {
                                         
                     }).always(function(data) {}); 
                            
            
                }
            
           
            },
            danger: {
                text:'no',
                btnClass: 'btn-red any-other-class', // multiple classes.
                
            }
        }
        })

    
   



       
       })

})