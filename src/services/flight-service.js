const {FlightRepository,AirplaneRepository}=require('../repository/index')
const {comparetime}=require('../utils/helper')

class FlightService{


  constructor(){
    this.airplaneRepository=new AirplaneRepository();
    this.flightRepository=new FlightRepository();
  }


  async createflight(data){

    try{
      if(!comparetime(data.arrivalTime,data.departureTime)){
        throw {error:'arrival time cannot be less than the departure time'};
      }
      console.log(data);
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      console.log(airplane);
      const flight=await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
      return flight;
    }
    catch(error){
      console.log("something went wrong at the flight service layer");
      console.log(error);
    }

  }
  async getFlightData(){
    
  }
  async getAllFlightData(data){
    const flight=await this.flightRepository.getAllFlights(data);
    return flight;

  }
  catch(error){
    console.log("something went wrong at the flight service layer");
    console.log(error);
  }
  

}

module.exports=FlightService;
/**
 * {
 * flightNumber,
 * airplaneId
 * departureAirportid,
 * arrivalAirportid,
 * arrivaltime
 * departuretime
 * price
 * totalseat-> fetch from the aiplane// there fore we need the airplace repo also 
 * 
 * }
 */
