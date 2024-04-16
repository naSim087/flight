const {CityService, CityService}= require('../services/index');

const CityService = new CityService();

const create= async (req,res)=>{


    try{
      const city=await CityService.createCity(req.body);
      return res.status(200).json({
        data:city,
        success:true,
        message:"successfully created the city",
        err:{}
      })
    }
    catch(error){
      console.log(error);
      return res.status(500).json({
        data:{},
        success:false,
        message: "not able to create city",
        err: error ,
      });
    }
}


const destroy= async (req,res)=>{
  try{
    const response=await CityService.deleteCity(req.params.id);
    return res.status(200).json({
      data:response,
      success:true,
      message:"successfully deleted the city",
      err:{}
    })
  }
  catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message: "not able to delete the city",
      err: error ,
    });
  }
}

const update= async (req,res)=>{
  try{
    const response=await CityService.updateCity(req.params.id,req.body);
    return res.status(200).json({
      data:response,
      success:true,
      message:"successfully updated the city",
      err:{}
    })
  }
  catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message: "not able to update the  city",
      err: error ,
    });
    
  }
}

const get= async (req,res)=>{
  try{
    const response=await CityService.getCity(req.params.id);
    return res.status(200).json({
      data:response,
      success:true,
      message:"successfully fetched the city",
      err:{}
    })
  }
  catch(error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success:false,
      message: "not able to get city",
      err: error ,
    });
  }
}


module.exports={
  create,
  destroy,
  update,
  get
}