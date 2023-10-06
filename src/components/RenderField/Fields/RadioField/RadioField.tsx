import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioFieldSchema } from './types';

function RadioField({ field }: { field: RadioFieldSchema }) {
  const { formState, control } = useFormContext();
  const { errors } = formState;
  const { label, key, rules } = field;

  return (
    <div className="text-field">
      <Typography variant="h6">{label}</Typography>
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
            // inputRef={ref}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
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

export default RadioField;
