
$(function(){

    var es_correcto;
    var cant_dinero;
    var cant_zukos_representados_por_el_dinero;
    var cantidad_de_zukos_vendidos_segun_los_inputs; 
    var cantidad_de_dinero_que_representa_los_zukos_vendidos_segun_los_inputs; 
    var errores;
    var lista_packs; 

    //Funcion para cuando se seleccione un checkbox se actualize la etiqueta del footer de la tabla con la cantidad de mulas seleccionadas
    $("#card-body")



       $("#form").on("submit",function(e){
       e.preventDefault();
       parametros = new FormData(this);
       parametros.append('action',"calcular");

       



       $.confirm({
        theme: 'material',
        title: 'Generar parte',
       
    
        content: 'Esta a punto de generar un parte con los datos anteriormente seleccionados. Desea Continuar?',
    
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
                //location.href =url_ok;
            
                es_correcto = data.flag_parte_correcto
                cant_dinero = data.cantidad_de_dinero_introducido
                cant_zukos_representados_por_el_dinero = data.cantidad_de_zukos_que_representa_el_dinero_introducido
                cantidad_de_zukos_vendidos_segun_los_inputs = data.cantidad_de_zukos_vendidos_segun_los_inputs
                cantidad_de_dinero_que_representa_los_zukos_vendidos_segun_los_inputs = data.cantidad_de_dinero_que_representa_los_zukos_vendidos_segun_los_inputs
                errores=data.errores
                lista_packs = data.lista_packs
                
                
                if (es_correcto == true){
                    $("#estado_del_parte").html(`  
                    
                        <div class="alert alert-success" role="alert">
                            <i class="icon fas fa-check"></i>Es Correcto
                        </div>
                    `)
                    $("#enviar").css("display", "block")
                    $("#errores").css("display", "none")
                }
                else{
                    $("#enviar").css("display", "none")
                    
                    $("#estado_del_parte").html(`  

                        <div class="alert alert-danger" role="alert">
                            <i class="icon fas fa-ban"></i>Es Incorrecto
                        </div>
                    `)


                    listado_errores_string = ''

                    for (let i = 0; i < errores.length; i++) {
                        
                        x = '<li style="color: red;">'+errores[i] +'</li>'
                        
                        listado_errores_string = listado_errores_string + x
                        
                    }

                    $("#lista_errores").html(listado_errores_string)

                    $("#errores").css("display", "block")

                }
                


                listado_packs_string = ''

                for (let i = 0; i < lista_packs.length; i++) {

                    x = '<li><strong>'+lista_packs[i].zuko  +':</strong> <span style="color: green;"> <strong>'+lista_packs[i].cantidad_vendida+'</strong></span> unidades</li>'
                    
                    listado_packs_string = listado_packs_string + x
                    
                }

                $("#lista_packs").html(listado_packs_string)




                $("#cant_zukos_vendidos").html(cantidad_de_zukos_vendidos_segun_los_inputs)
                $("#dinero_introducido").html(cant_dinero)

                $("#parte").css("display", "block")
                
                return false;
                }
                else{
                //console.log(data.error)
                MensajeError('acc',data.error);
                
                
                }
                
                
            }).fail(function( jqXHR,textStatus,errorThrown) {
                                
            }).always(function(data) {
            
            }); 
                    
                
                            
            
                }
            
           
            },
            danger: {
                text:'no',
                btnClass: 'btn-red any-other-class', // multiple classes.
                
            }
        }
       })



      
   
       
       })

       

    $("#parte")
       
      

        $("#enviar").on("click",function(e){
            e.preventDefault();

            var data_return = new FormData();
            
            var lista = [];
       

            for (let i = 0; i < lista_packs.length; i++) {
                
                lista.push('{"token":"'+lista_packs[i].token+'","cantidad_vendida":"'+lista_packs[i].cantidad_vendida+'"} ')
            }

            data_return.append('lista',lista)

            var parametros ={
            'action':'crear_venta',
            'lista':data_return.get('lista'),
         
            }
            
            
            $.confirm({
                theme: 'material',
                title: 'Generar parte',
               
            
                content: 'Esta a punto crear una venta basandose en los datos del parte anteriormente generado. Desea Continuar?',
            
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
           
                    
        
        
                    }).done(function(data) {
        
                        if(!data.hasOwnProperty('error')){
                        location.href =url_ok;
                    
              
                        return false;
                        }
                        else{
                        //console.log(data.error)
                        MensajeError('acc',data.error);
                        
                        
                        }
                        
                        
                    }).fail(function( jqXHR,textStatus,errorThrown) {
                                        
                    }).always(function(data) {
                    
                    }); 
                            
                        
                                    
                    
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

