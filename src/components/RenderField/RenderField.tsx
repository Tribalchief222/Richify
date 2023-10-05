import { CustomField } from './Fields/CustomField';
import TextField from './Fields/TextField/TextField';
import { FieldsType } from './types';

const RenderField = ({ field }: { field: FieldsType }) => {
  const { type, key } = field;

  const fieldMap: Record<FieldsType['type'], unknown> = {
    text: TextField,
    custom: CustomField,
  };

  const Component = fieldMap[type];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Don't know why it's not working
  return <Component field={field} key={key} />;
};

export default RenderField;
