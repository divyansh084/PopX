import "./index.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import ProfileCard from "./card";

export default function CreateAcc(){

  const [profile, setProfile] = useState(false);

    const handleProfileCardClick = (e) => {
        e.preventDefault();
        setProfile(true);
    };
    if (profile) {
        return <ProfileCard />;
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
        <div className="ml-[400px] bg-[#f7f8f9] w-96 ...">
          <div className="ml-10">
            <h1 className="text-[28px] font-medium text-left pt-[12px] ... pb-[12px]">Create Your  <br></br>PopX account</h1>
            <div className="grid grid-cols-1 gap-1">
            <form>

                <div className="flex flex-col space-y-4 ">
                <TextField label="Full Name" color="secondary" focused required className="w-75"  sx={textFieldStyles} placeholder="Marry Doe"/><b></b>
                <TextField label="Phone Number" color="secondary" focused required className="w-75" sx={textFieldStyles} placeholder="+6556464863"/><b></b>
                <TextField label="Email Address" color="secondary" focused required className="w-75" sx={textFieldStyles} placeholder="Marry Doe"/><b></b>
                <TextField label="Passward" color="secondary" focused required className="w-75" sx={textFieldStyles} placeholder="Marry Doe"/><b></b>
                <TextField label="Company Name" color="secondary" focused required className="w-75" sx={textFieldStyles} placeholder="Marry Doe"/><b></b>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className="mr-50 ...">Are you an agent ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
                </div>
                <button 
                className="w-70 h-7 bg-[#6C25FF] text-white rounded mt-2 text-[15px] mr-[50px]" 
                onClick={handleProfileCardClick}
                >Create account</button>
            </form>
            
            </div>
                 </div>
        </div>

            )
}