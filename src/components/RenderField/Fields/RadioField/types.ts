import { UseControllerProps } from "react-hook-form";
import {ReactNode} from 'react'

export type RadioFieldSchema = {
    type: 'radio';
    label: ReactNode;
    rules?: UseControllerProps['rules'];
    key: string;
    extra: string;
    options: Option[];
};