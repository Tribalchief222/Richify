import { Typography } from '@mui/material';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectFieldSchema } from './types';
// import { selectData } from './types';

function SelectField({ field }: { field: SelectFieldSchema }) {
  const { formState, control } = useFormContext();
  const { errors } = formState;
  const {label, key, rules, id , options} = field;

    const [age, setAge] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
      console.log(event.target.value);
    };

  return (
    <div className="number-field">
      <Typography variant="h6">{label}</Typography>
      <Controller
        control={control}
        name={key}
        rules={rules}
        render={({ field: { onChange, onBlur, value, name, ref, } }) => (
          <>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={onChange} // Use the onChange provided by react-hook-form
              onBlur={onBlur}
            >
             {options.map(({value,label}) =>{
                return (
                    <MenuItem value= {value}>{label}</MenuItem>
                )
             })}
            </Select>
          </>
        )}
      />
      {errors[key] && (
        <Typography variant="caption" color="error">
          {errors[key]?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}

export default SelectField;
