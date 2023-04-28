type iOptionProps = {
    id:number
    name: string;
}

export const Options = ({ id, name }: iOptionProps) => {
    return <option id={String(id)} value={name}>{name}</option>;
}
