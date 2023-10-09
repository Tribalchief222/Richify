import { Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TypographyFieldSchema } from './types';


function TypographyField({field}: { field: TypographyFieldSchema}){
    const { label, key, rules } = field;

    return (
        <div className="text-field">
          <Typography sx={{fontSize: '25px',padding: 5, marginTop: 0,}}>{label}</Typography>
          
        </div>
      );

}

export default TypographyField;

