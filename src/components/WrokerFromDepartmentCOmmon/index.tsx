type iUserProps ={
    name:string
    professional_level:string
    id:number
}

export const WrokerFromDepartmentCommon = ({name, professional_level, id}:iUserProps) => {
    return (
        <li key={name + Math.random()} id={String(id)} >
            <h3>{name}</h3>
            <p>{professional_level}</p>
        </li>

    );
}

