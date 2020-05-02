const Employee = require("../models/Employee")

//show list of emp

const index =(req,res,next)=>{

    Employee.find()
    .then(response=>{
        res.json({response})
    }).catch(error=>{
        res.json({
            messgae:"error occured"
        })
    })
}
//single emp
const show =(req,res,next)=>{

    let employeeID= req.body.employeeID

    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            messaGe:"error occured"
        })
    })
}

//add employee to db

const store =(req,res,next)=>{

    let employee = new Employee({
        name:req.body.name,
        designatiom:req.body.designatiom,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })

    
    employee.save()
    .then(response=>{
        res.json({message:'emp added succus'})
    }).catch(error=>{
        res.json({
            message:"error occured"
        })
    })
}

// update emp

const update =(req,res,next)=>{

    let employeeID = req.body.employeeID   


    let updateData = {
        name:req.body.name,
        designatiom:req.body.designatiom,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }


    Employee.findByIdAndUpdate(employeeID,{$set:updateData})
    .then(()=>{
        res.json({message:'emp updated succus'
    })
    })
    .catch(error=>{
        res.json({
            message:"error occured"
        })
    })
}
//delete emp

const destroy =(req,res,next)=>{

    let employeeID =req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        req.json({
            message:"deleted sucuess"
        })

    })
    .catch(error=>{

        req.json({
            message:"error occuered!"
        })
    })
}

module.exports={
    index, show, store, update, destroy
}