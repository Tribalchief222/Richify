import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Typography, Box } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioFieldSchema } from './types';

function RadioField({ field }: { field: RadioFieldSchema }) {
  const { formState, control } = useFormContext();
  const { errors } = formState;
  const { label, key, extra, rules, options } = field;

  return (
    <div className="text-field">
      <Box sx={{ marginX: 5, marginTop: 8 }}>
          <Typography sx={{ fontSize: '25px',paddingX: 5, paddingY: 2, marginBottom: 1, backgroundColor: '#dcd395', borderRadius: 2 }}>{label}</Typography>
          {extra ? (
            <Box>
              <Typography sx={{paddingX: 5, marginY: 2, fontWeight: 600}}>{extra}</Typography>
            </Box>
          ) : null}
        <Controller
          control={control}
          name={key}
          rules={rules}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            //   name="radio-buttons-group
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            sx={{paddingX: 5}}
          >
            {options.map(({value}) =>{
                return (
                  <FormControlLabel value={value} control={<Radio />} label={value} />
                )
             })}
          </RadioGroup>
        )}
      />
      </Box>
      {errors[key] && (
        <Typography variant="caption" color="error">
          {errors[key]?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}

export default RadioField;