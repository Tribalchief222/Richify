import { Box, TextField as MuiTextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TextFieldSchema } from './types';

function TextField({ field }: { field: TextFieldSchema }) {
  const { formState, control } = useFormContext();
  const { errors } = formState;
  const { label, key, rules } = field;

  return (
    <div className="text-field">
      <Box sx={{ marginX: 10, marginTop: 15 }}>
        {label.includes(',') ? (
          <>
            <Typography sx={{ fontSize: '25px', marginBottom: 1 }}>{label.split(',')[0]}</Typography>
            <Typography sx={{ fontSize: '25px', marginBottom: 1 }}>{label.split(',')[1]}</Typography>
          </>
        ) : (
          <Typography sx={{ fontSize: '35px', marginBottom: 1 }}>{label}</Typography>
        )}
        <Controller
          control={control}
          name={key}
          rules={rules}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <MuiTextField
              size="small"
              label={label}
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
              sx={{
                width: '100%',
                height: '2.5rem',
              }}
            />
          )}
        />
      </Box>
    </div>
  );
}

export default TextField;
