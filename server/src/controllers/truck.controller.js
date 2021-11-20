const router = require( "express" ).Router();
// const Company = require( "../models/company.model" );
const Truck = require( "../models/truck.model" );
// const uuid = require( "uuid" );
// add a new company

router.post( "/", async ( req, res ) => {
    try {
        const truck = await Truck.create( req.body );
        res.status( 201 ).json( truck );
    } catch ( err ) {
        console.log( err );
        res.status( 500 ).send( err );
    }
} );

router.get( "/", async ( req, res ) => {
    try {
        const trucks = await Truck.find().lean().exec();
        res.status( 200 ).json( trucks );
    } catch ( err ) {
        console.log( err );
        res.status( 500 ).send( err );
    }
} );


module.exports = router;
