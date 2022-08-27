const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/test').then(()=> 
console.log('Database is connected')).catch((err)=> console.log(err))


//schema

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String,
})

const User = mongoose.model('User', userSchema)


// -----Create and save document
// async function storeInfo(){
//     const user = new User({
//         name: 'John',
//         age: 40,
//         isMarried: true,
//         salary: 900000,
//         gender: 'Male',
//     })
    
//    await user.save()
//    console.log(user)

// }

// storeInfo()


async function fetchInfo(){
    // -----find and query documents-----
    //const users = await User.find({isMarried: false}).select('name salary').sort('salary')

    //Comparison operators
    //(gte = greater than and equal to, in = is in, nin = not in etc..)
    // const users = await User.find({age: {$gte:60}})
    
    //Comparison operators(And/Or)
    // const users = await User.find().or([{isMarried:true}, {age:70}])  
    // .and()

    
    //update document1
    //const user  = await User.findById('6308af87da8015c71b328259')
    //user.isMarried = false
    //await user.save() 

     //update document2
     //const user  = await User.findByIdAndUpdate('6308af87da8015c71b328259', {age: 45, isMarried: true}, {new: true, runValidators: true})
    
    //Delete document in 3 ways

    //Method 1 - To delete one document
   // await User.deleteOne({_id: '6308b7e5bc11319cd5b4c2e7'})
   // await User.FindByIdAndDelete('6308b7e5bc11319cd5b4c2e7')
    

   //Method 2 - To delete more than one document that meets the delete condition
   await User.deleteMany({isMarried: false})

     
     // console.log(users)


}

fetchInfo()



