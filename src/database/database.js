const mongoose = require('mongoose');


(async ()=>{
    try{
        const db = await mongoose.connect('mongodb://localhost:27017/tasklists');
        console.log('Connected to ', db.connection.name);
    } catch(err){
        console.log(err);
    }

})()
 