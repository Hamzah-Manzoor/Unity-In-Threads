import mongoose from 'mongoose';

// Define the schema for form data
const formDataSchema = new mongoose.Schema({
    formData :[
        {
            customerName: String,
            sizeFor: String,
            length: String,
            gap: String,
            sleeves: String,
            vt: String,
            headSize: String,
            belly: String,
            shoulder: String,
            neck: String,
            halfBack: String,
            crossBack: String,
            collarDesign: String,
            frontPatty: String,
            cuff: String,
            frontPocket: String,
            sidePocket: String,
            waist: String,
            hip: String,
            bottom: String,
            inseam: String,
            footSize: String    
        }
    ],
  comments: [{
    comment: String,
    files: [String] // Array of file paths
  }]
}, { timestamps: true });

// Define the model
const FormDataModel = mongoose.model('FormData', formDataSchema);

export default FormDataModel;
