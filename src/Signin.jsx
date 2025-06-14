import "./index.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useState } from "react"
import ProfileCard from "./card.jsx"

export default function CreateAcc(){
  let [card,setcard]=useState(false)

let handleCardClick =(e)=>{
      e.preventDefault();
      setcard(true);
}
if(card){
  return(
    <ProfileCard/>
  )
}
    const textFieldStyles = {
  '& label': {
    color: '#6C25FF',
  },
  '& label.Mui-focused': {
    color: '#6C25FF',
  },
  '& .MuiFormLabel-asterisk': {
    color: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: ['#CBCBCB'],
    },
    '&:hover fieldset': {
      borderColor: ['#CBCBCB'],
    },
    '&.Mui-focused fieldset': {
      borderColor: ['#CBCBCB'],
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: 'red',
  },
  '& .MuiInputBase-root.Mui-error fieldset': {
    borderColor: 'red',
  },
};
    return(
        <div className="ml-[400px] bg-[#f7f8f9] w-96 ... h-150">
          <div className="ml-10">
            <h1 className="text-[28px] font-medium text-left pt-[12px] ... pb-[12px]">Signin to your <br></br> PopX account</h1>
            <p className="text-[15px]  text-left  ... pb-[18px] opacity-45 ...">welcome back to your account </p>
            <div className="grid grid-cols-1 gap-1">
            <form>

                <div className="flex flex-col space-y-4 ">
                <TextField label="Email Address" color="secondary" focused required className="w-75" sx={textFieldStyles} placeholder="Enter Your e-mail"/><b></b>
                <TextField label="Passward" color="secondary" focused required className="w-75" sx={textFieldStyles} placeholder="Enter your Passward"/><b></b>
                </div>
                <button 
                className="w-70 h-7 bg-[#6C25FF] text-white rounded mt-2 text-[15px] mr-[50px] opacity-25 ..." 
                onClick={handleCardClick}
                >Login</button>
            </form>
            
            </div>
                 </div>
        </div>

            )
}