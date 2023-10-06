import { UseControllerProps } from "react-hook-form";

export type RadioFieldSchema = {
    type: 'radio';
    label: string;
    rules?: UseControllerProps['rules'];
    key: string;
};