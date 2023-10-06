import {UseControllerProps} from 'react-hook-form';

export type NumberFieldSchema = {
    type: 'number';
    label: 'string';
    rules?: UseControllerProps['rules'];
    key: string

};