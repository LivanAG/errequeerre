function CargarTabla(){

   

    tabla_sabores_zuko = $('#sabores_zukos').DataTable({
        
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        "ordering": false,
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
            'action':'listar',
        },
        dataSrc: ""

    },
    columns:[
        
   
        {'data': 'Sabor'},
       
    ],
    
    columnDefs:[
        

    
    ],
 
    initComplete: function(settings, json) {
        //alert('tabla cargada')    
      }

});
    
}


$(function(){

    CargarTabla();



})


