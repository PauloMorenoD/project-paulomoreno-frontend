import { UseFormRegister } from "react-hook-form";

export type iInputProps = {
    placeholder: string;
    name: string;
    type:string;
    register: UseFormRegister<any>;
}