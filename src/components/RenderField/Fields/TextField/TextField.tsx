import { TextField as MuiTextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TextFieldSchema } from './types';

function TextField({ field }: { field: TextFieldSchema }) {
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
          <MuiTextField
            size="small"
            error={Boolean(errors[key])}
            helperText={
              <Typography variant="caption" color="error">
                {errors[key]?.message?.toString()}
              </Typography>
            }
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

export default TextField;
