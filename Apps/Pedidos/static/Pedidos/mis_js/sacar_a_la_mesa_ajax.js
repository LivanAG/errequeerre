$(function(){

    //Funcion para cuando se seleccione un checkbox se actualize la etiqueta del footer de la tabla con la cantidad de mulas seleccionadas
    $("#card-body")



       $("#form").on("submit",function(e){
       e.preventDefault();
       parametros = new FormData(this);
       parametros.append('action',"editar");

       
   
      
   

           $.confirm({
            theme: 'material',
            title: 'Sacar zukos a la mesa:',
           
        
            content: 'Esta a punto de sacar zukos a la mesa. Desea Continuar?',
        
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

