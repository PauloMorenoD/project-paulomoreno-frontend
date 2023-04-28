type iInputProps = {
    placeholder:string;
    type:string;
}

export const ModalInput = ({placeholder, type}:iInputProps) => {
  return (
    <input type={type} placeholder={placeholder}/>
  );
}
