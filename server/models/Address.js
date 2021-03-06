const { Schema } = require('mongoose');

const addressSchema = new Schema(
    {
        street: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false  
        },
        neighbourhood: {  
            type: String,
            required: false,   
        },
        province: {
            type: String,
            required: false  
        },
        postal_code: {
            type: String,
            required: false  
        }
    }
);

module.exports = addressSchema;