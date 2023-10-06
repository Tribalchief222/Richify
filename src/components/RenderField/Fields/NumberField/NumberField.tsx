import {TextField as MuiTextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { NumberFieldSchema } from './types';

function NumberField({ field }: { field: NumberFieldSchema }) {
    const { formState, control } = useFormContext();
    const { errors } = formState;
    const { label, key, rules, type } = field;
  
    return (
        <div className="number-field">
        <Typography variant="h6">{label}</Typography>
        <Controller
          control={control}
          name={key}
          rules={rules}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <MuiTextField
              size="small"
              error={Boolean(errors[key])}
              helperText={
                <Typography variant="caption" color="error">
                  {errors[key]?.message?.toString()}
                </Typography>
              }
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              name={name}
              inputRef={ref}
            />
          )}
        />
      </div>
    );
  }
  
  export default NumberField;