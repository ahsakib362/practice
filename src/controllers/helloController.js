exports.HelloGet= (req,res)=>{

    res.status(200).json({status:"success",data:"This is my first Express rest API for get method"});

}

exports.HelloPost= (req,res)=>{

    res.status(201).json({status:"success",data:"This is my first Express rest API for post method"});

}