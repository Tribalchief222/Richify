import { UseControllerProps } from "react-hook-form";

export type TypographyFieldSchema = {
    type: 'text';
    label: string;
    rules?: UseControllerProps['rules'];
    key: string;
  };
  
  