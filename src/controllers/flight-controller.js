const {FlightService}=require('../services/index')
const flightservice=new FlightService();

const create= async (req,res)=>{

  try{
      const flight=await flightservice.createflight(req.body);
      return res.status(200).json({
        data:flight,
        success:true,
        err:{},
        message:"successfully created flight",
      })

  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to create a flight',
        err: error
    });
}
}

module.exports={
  create,
}