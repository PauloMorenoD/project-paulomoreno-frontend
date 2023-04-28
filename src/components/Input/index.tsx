import { iInputProps } from "./types";


export const Input = ({ placeholder, name, type, register }: iInputProps) => {
    return(
        <input type={type} placeholder={placeholder} {...register(name)}/>
    );
}
