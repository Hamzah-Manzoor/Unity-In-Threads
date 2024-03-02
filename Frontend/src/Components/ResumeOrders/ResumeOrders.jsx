import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductTable from './ProductTable';

export default function ResumeOrders() {


    const [orders, setorders] = useState([]);


    useEffect(() => {
        axios.get('/api/Orders/get-Orders').then((res)=>{
                console.log("response", res);
                setorders(res.data.orders);
                console.log(orders)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
      <ProductTable orders={orders}></ProductTable>
        
  )
}
