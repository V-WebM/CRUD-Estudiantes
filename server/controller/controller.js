var Studentdb = require("../model/model");

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Guardado"});
        return;
    }

    const student = new Studentdb({
        name: req.body.name,
        surname: req.body.surname,
        course: req.body.course,
        record: req.body.record
    })

    student
        .save(student)
        .then(data =>{
            res.redirect('/add-student')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error al crear"
            });
        });
}

exports.find =(req,res)=>{

    if(req.query.id){
        const id=req.query.id;
        Studentdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Not found student"})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Erro retrieving user"})
        })
    }else{
        Studentdb.find()
        .then(student=>{
            res.send(student)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error al mostrar"})
        })
    }
}

exports.update=(req,res)=>{
    if(req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }
    
    const id=req.params.id;
    Studentdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Actualizado"})
        }else{
            send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error en actualizar"})
    })
}

exports.delete=(req,res)=>{
    const id=req.params.id;

    Studentdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:Aea})
        }else{
            res.send({
                message:"Student was deleted"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Student not delte"
        });
    });
}