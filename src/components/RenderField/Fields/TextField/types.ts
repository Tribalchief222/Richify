import { UseControllerProps } from "react-hook-form";

export type TextFieldSchema = {
  type: 'text';
  label: string;
  rules?: UseControllerProps['rules'];
  key: string;
};
