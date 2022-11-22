function CargarTabla(){

   

    tabla_inventario= $('#inventario').DataTable({
        
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        "ordering": false,
        "pageLength": 20,
        "lengthChange": false,
        "language":{
            
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningun dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "�ltimo",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
        },
   
    ajax:{

        url:window.location.pathname,
        type: 'POST',
        data:{
            'action':'listar',
        },
        dataSrc: ""

    },
    columns:[
        

        
   
        {'data': 'zuko'},
        {'data': 'Cantidad_de_ejemplares_total'},
        {'data': 'Cantidad_de_ejemplares_mesa'},
    ],
    
    columnDefs:[
        
     

    
    ],
 
    initComplete: function(settings, json) {
        //alert('tabla cargada')    
      }

});
    
}


function CargarTablaNotificaciones(){

   

    tabla_notificaciones= $('#notificaciones').DataTable({
        
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        "ordering": true,
        "pageLength": 10,
        "lengthChange": false,
        "language":{
            
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningun dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "�ltimo",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
        },
   
    ajax:{

        url:window.location.pathname,
        type: 'POST',
        data:{
            'action':'listar_notificaciones',
        },
        dataSrc: ""

    },
    columns:[
        

        
   
        {'data': 'tipo'},
        {'data': 'created_at'},
        {'data': 'tipo'},
    ],
    
    columnDefs:[
        {
            targets: [1],
            class: '',
            
            render:function(data,type,row){
                var date = new Date(data);
  
                return  data
               
            }
        },
        
        {
            targets: [2],
            class: 'text-center',
            
            render:function(data,type,row){
               
                html = '<button rel="ver_notificacion" class="btn btn-success mr-5"> VER </button>'

                
                
                return  html
            
            }
        },

    
    ],
 
    initComplete: function(settings, json) {
        //alert('tabla cargada')    
      }

});
    
}

$(function(){

    CargarTabla();

    CargarTablaNotificaciones();

    
    $("#notas")
    .on("click","button[rel='ver_notificacion']",function(){ 

        var tr = tabla_notificaciones.cell( $(this).closest("td","li")).index(); // capturamos la fila
        var data = tabla_notificaciones.row(tr.row).data(); // Guardamos el objeto que habia en esa fila en data
 
        parametros = new FormData();
        parametros.append('action',"datos_modal_notificaciones");
        parametros.append('data',JSON.stringify(data));
                        
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
                    
                    lista_packs = JSON.parse(data.lista_packs)

                    $("#tipo").html(data.tipo)



                    listado_packs_string = ''

                    for (let i = 0; i < lista_packs.length; i++) {

                        x = '<li><strong>'+lista_packs[i].sabor_zuko  +':</strong> <span style="color: green;"> <strong>'+lista_packs[i].Cantidad_de_ejemplares+'</strong></span> unidades</li>'
                        
                        listado_packs_string = listado_packs_string + x
                        
                    }

                    $("#lista_packs").html(listado_packs_string)

                    $("#total_unidades").html(data.total_unidades)
                    $("#texto").html(data.texto)

                    $("#VerNotificacionModal").modal("show"); 
                    
                    return false;
                    }
                    else{
                    //console.log(data.error)
                    MensajeError('acc',data.error);
                    
                    
                    }
                    
                    
                }).fail(function( jqXHR,textStatus,errorThrown) {
                                    
                }).always(function(data) {
                
                }); 
                        
                    

        
        })


})


