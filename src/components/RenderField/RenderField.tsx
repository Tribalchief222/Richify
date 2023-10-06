import { TextField } from '@mui/material';
import { CustomField } from './Fields/CustomField';
import NumberField from './Fields/NumberField/NumberField';
import SelectField from './Fields/SelectField/SelectField';
import RadioField from './Fields/RadioField/RadioField';
import TypographyField from './Fields/Typographyfield/TypographyField';

const RenderField = ({ field }: { field: FieldsType }) => {
  const { type, key } = field;

  const fieldMap: Record<FieldsType['type'], unknown> = {
    text: TextField,
    custom: CustomField,
    number: NumberField,
    select: SelectField,
    radio: RadioField,
    typography: TypographyField,
  };

  const Component = fieldMap[type];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Don't know why it's not working
  return <Component field={field} key={key} />;
};

export default RenderField;
