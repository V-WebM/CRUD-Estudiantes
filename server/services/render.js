const axios = require('axios');


exports.homeRoutes=(req,res)=>{
    axios.get("http://localhost:3000/api/student")
    .then(function(response){
        res.render('index',{students:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_student=(req,res)=>{
    res.render('add_student');
}

exports.update_student=(req,res)=>{
    axios.get("http://localhost:3000/api/student",{params:{id:req.query.id}})
    .then(function(studentdata){
        res.render("update_student",{student:studentdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}