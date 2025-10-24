import mongoose from "mongoose";


 export const connectdb = async(uniquecode,url) =>{
 await   mongoose.connect("mongodb://localhost:27017/urlshorten");
    const db=  mongoose.connection.db;
    let doc ={
        uniquecode:uniquecode,
        original:url
    }
   const insert = await db.collection("URL").insertOne(doc)
   console.log("db connected and inserted the urls ")

return db ;
}

export const readurl=async (uniquecode)=>{
    
 await   mongoose.connect("mongodb://localhost:27017/urlshorten");
    const db=  mongoose.connection.db;

    const url=await db.collection("URL").findOne({uniquecode:{$eq:uniquecode}})
    console.log(url.original)
    return url;
}


export const allurls= async (req,res)=>{
    
 await mongoose.connect("mongodb://localhost:27017/urlshorten");
    const db= mongoose.connection.db;

const url=await db.collection("URL").find({},{_id:0,uniquecode:1}).toArray();
const originalURL = url.map(item => item.uniquecode);
    console.log('feching the urls completed ')
    res.json(originalURL);
}



export const redirecter= async (req,res)=>{
    
 await mongoose.connect("mongodb://localhost:27017/urlshorten");
    const db= mongoose.connection.db;
    const {code}=req.params;

    const url=await db.collection("URL").findOne({
        uniquecode:{$eq:code}}
    );
    const original=url.original
    
    res.redirect(original);
}
// console.log( readurl("c7ogqy"))
// allurls();