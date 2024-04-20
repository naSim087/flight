const {Flights}=require('../models/index');

class FlightRepository{
  async createFlight( data ) { // destructuring the obj which is passed
    try {
         const flight = await Flights.create(data);
         return flight;
        }
     catch (error) {
        console.log("semething went wrong in the repository layer\n");
        throw {error};
    }
}

}
module.exports=FlightRepository;