import { UseControllerProps } from "react-hook-form";

 
export type SelectFieldSchema = {
    label:"age";
    rules?: UseControllerProps['rules'];
    labelId:"demo-simple-select-label";
    id:"demo-simple-select";
    // selectData: typeof selectData;
    key: string;
    options: Option[];

}