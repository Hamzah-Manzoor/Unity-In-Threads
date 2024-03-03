import React, { useState } from 'react'
import CommentForm from './CommentForm';
import axios from 'axios';


export default function CustomOrder() {

  const [comment, setComment] = useState('');
  const [files, setFiles] = useState([]);
  const [base64Array, setBase64Array] = useState([]);

  function converttoBase64(file){
        return new Promise((resolve , reject)=>{
              const fileReader = new FileReader(file)

              fileReader.readAsDataURL(file)
              fileReader.onload = ()=>{
                  resolve(fileReader.result)
              }
              fileReader.onerror = (error)=>{
                reject(error);
              }
        })
  }

  const [formData, setFormData] = useState({
    customerName: '',
    sizeFor: '',
    length: '',
    gap: '',
    sleeves: '',
    vt: '',
    headSize: '',
    belly: '',
    shoulder: '',
    neck: '',
    halfBack: '',
    crossBack: '',
    collarDesign: '',
    frontPatty: '',
    cuff: '',
    frontPocket: '',
    sidePocket: '',
    waist: '',
    hip: '',
    bottom: '',
    inseam: '',
    footSize: ''
  });



  // Function to update form field values in state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  
  const handleFileChange = async (files) => {
    const fileList = Array.isArray(files) ? files : [files];
  
    const base64Promises = fileList.map(file => converttoBase64(file));

    console.log(base64Promises)
  
    try {
      const base64Results = await Promise.all(base64Promises);

      console.log('base64Results' + base64Array)
      
      setBase64Array(prevState => [...prevState, ...base64Results]); // Concatenate new results with previous state
      

    } catch (error) {
      console.error('Error converting files to base64:', error);
    }
  };
  

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFileChange(files);
    console.log(base64Array)
    // /api/Orders/get-Orders
    axios.post('http://localhost:3000/Orders/sizeForm' , {formData , comment , base64Array}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    // setComment('');
    // setFiles([]);
  };    
        
      
  return (
    <form className="w-full text-center">
      <h1 className='p-4 text-5xl text-slate-50'>Form</h1>
  
      {/* General Information */}
      <div className="p-4 text-2xl text-slate-50">General Information</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 p-3 mb-2">
          <label htmlFor="customerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Customer Name"
            required
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-1 p-3 mb-2">
          <label htmlFor="sizeFor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Size For (Product)
          </label>
          <input
            type="text"
            id="sizeFor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Size For (Product)"
            required
            value={formData.sizeFor}
            onChange={handleInputChange}
          />
        </div>
      </div>
  
      {/* Upper Garment Size */}
      <div className="p-4 text-2xl text-slate-50">Upper Garment Size</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Length, Gap, Sleeves */}
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Length
    </label>
    <input
      type="number"
      id="length"
      value={formData.length}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Length"
      required
    />
  </div>
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="gap" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Gap
    </label>
    <input
      type="number"
      id="gap"
      value={formData.gap}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Gap"
      required
    />
  </div>
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="sleeves" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Sleeves
    </label>
    <input
      type="number"
      id="sleeves"
      value={formData.sleeves}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Sleeves"
      required
    />
  </div>
  {/* 'ВТ, Head Size */}
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="vt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Hip
    </label>
    <input
      type="number"
      id="vt"
      value={formData.vt}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Hip"
      required
    />
  </div>
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="headSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Head Size
    </label>
    <input
      type="number"
      id="headSize"
      value={formData.headSize}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Head Size"
      required
    />
  </div>
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="belly" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Belly
    </label>
    <input
      type="number"
      id="belly"
      value={formData.belly}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Belly"
      required
    />
  </div>
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="shoulder" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Shoulder
    </label>
    <input
      type="number"
      id="shoulder"
      value={formData.shoulder}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"></input>
      </div>
      <div className="col-span-1 p-3 mb-2">
  <label htmlFor="sleeves" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Sleeves
  </label>
  <input
    type="number"
    id="sleeves"
    value={formData.sleeves}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Sleeves"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="neck" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Neck
  </label>
  <input
    type="number"
    id="neck"
    value={formData.neck}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Neck"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="halfBack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Half Back
  </label>
  <input
    type="number"
    id="halfBack"
    value={formData.halfBack}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Half Back"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="crossBack" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Cross Back
  </label>
  <input
    type="number"
    id="crossBack"
    value={formData.crossBack}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Cross Back"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="headSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Head Size
  </label>
  <input
    type="number"
    id="headSize"
    value={formData.headSize}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Head Size"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="collarDesign" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Collar Design
  </label>
  <input
    type="number"
    id="collarDesign"
    value={formData.collarDesign}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Collar Design"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="frontPatty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Front Patty
  </label>
  <input
    type="number"
    id="frontPatty"
    value={formData.frontPatty}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Front Patty"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="cuff" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Cuff
  </label>
  <input
    type="number"
    id="cuff"
    value={formData.cuff}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Cuff"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="frontPocket" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Front Pocket
  </label>
  <input
    type="number"
    id="frontPocket"
    value={formData.frontPocket}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Front Pocket"
    required
  />
</div>

<div className="col-span-1 p-3 mb-2">
  <label htmlFor="sidePocket" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Side Pocket
  </label>
  <input
    type="number"
    id="sidePocket"
    value={formData.sidePocket}
    onChange={handleInputChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Side Pocket"
    required
  />
</div>
        
      </div>
  
      {/* Bottom Garment Size */}
      <div className="p-4 text-2xl text-slate-50">Bottom Garment Size</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Bottom, Foot Size */}
  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="waist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Waist
    </label>
    <input
      type="number"
      id="waist"
      value={formData.waist}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Waist"
      required
    />
  </div>

  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="hip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Hip
    </label>
    <input
      type="number"
      id="hip"
      value={formData.hip}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Hip"
      required
    />
  </div>

  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Length
    </label>
    <input
      type="number"
      id="length"
      value={formData.length}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Length"
      required
    />
  </div>

  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="bottom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Bottom
    </label>
    <input
      type="number"
      id="bottom"
      value={formData.bottom}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Bottom"
      required
    />
  </div>

  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="inseam" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Inseam
    </label>
    <input
      type="number"
      id="inseam"
      value={formData.inseam}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Inseam"
      required
    />
  </div>

  <div className="col-span-1 p-3 mb-2">
    <label htmlFor="footSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Foot Size
    </label>
    <input
      type="number"
      id="footSize"
      value={formData.footSize}
      onChange={handleInputChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Foot Size"
      required
    />
  </div>
</div>

            <div className="p-4 text-2xl text-slate-50">
              Mention Size Details
              <CommentForm setComment={setComment} setFiles={setFiles} comment={comment} files={files} ></CommentForm>
            </div>
            <div className="p-4 text-2xl text-slate-50">
            <button type="button" onClick={(e)=>{handleSubmit(e)}} class="text-white bg-gradient-to-r from-blue-500
             via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
             focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Submit Form</button>
            </div>
            </form>
  );

}