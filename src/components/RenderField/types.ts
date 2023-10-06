import { CustomFieldSchema } from './Fields/CustomField';
import { TextFieldSchema } from './Fields/TextField';
import { SelectFieldSchema } from './Fields/SelectField';
import { NumberFieldSchema } from './Fields/NumberField';
import { RadioFieldSchema } from './Fields/RadioField';
import { TypographyFieldSchema } from './Fields/Typographyfield';


export type FieldsType = TextFieldSchema | NumberFieldSchema | SelectFieldSchema | CustomFieldSchema | RadioFieldSchema | TypographyFieldSchema ;
