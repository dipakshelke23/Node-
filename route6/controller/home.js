let homepage = async(req,res)=>{
    res.send("Home") ;
}
let profilepage=async(req,res)=>{
    res.send("profilepic");
}

module.exports={homepage,profilepage};