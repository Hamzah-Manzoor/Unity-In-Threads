import mongoose from 'mongoose';
import shortid from 'shortid'; // You can use shortid library to generate short, unique IDs


// Define the schema for form data
const formDataSchema = new mongoose.Schema({
  sizeFormId : {
    type : String ,
    required : true
  },
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

const FormDataModel = mongoose.model('FormData', formDataSchema);

export default FormDataModel;
