const mongoose = require('mongoose')

mongoose.connect(process.env.BASE_URL, {

    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(() => {
    console.log("_______Mongodb Atlas Connected_________");
}).catch(()=>{

    console.log("_______Mongodb Atlas NOT NOT NOT Connected_________");
})

