import React, { useState } from 'react';
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';

const EditCartItems=()=> {
    const history=useNavigate();
    const {id}=useParams();
    const [item,setItem]=useState({
        
    })
  return (
    <div>
      
    </div>
  );
}

export default EditCartItems;
