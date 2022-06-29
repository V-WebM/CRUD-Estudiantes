const e = require("express");

$("#add_student").submit(function(event){
    alert("Student insert");
})

$("#update_student").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i) {
        data[n['name']]=n['value']
    })

    console.log(data);
    var request ={
        "url":`http://localhost:3000/api/student/${data.id}`,
        "method": "PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Student update")
    })
})

if(window.location.pathname=="/"){
    $ondelete=$(".table tabody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request ={
            "url":`http://localhost:3000/api/student/${id}`,
            "method": "DELETE"
        }

        if(confirm("Desea eliminar el estudiante?")){
            $ajaz(request).done(function(response){
                alert("Estudiante eliminado");
                location.reload
            })
        }
    })
}