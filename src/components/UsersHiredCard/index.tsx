import { useContext } from "react"
import { companieContext } from "../../context/companieProvider"

type iUserCardProps = {
    id: number
    name: string
    professional_level: string
    companyName:string | undefined
}
export const UsersHiredCard = ({id, name, professional_level, companyName }:iUserCardProps) => {

    const { setUserId, AdminDeleteUser } = useContext(companieContext)
    return (
        <li key={name + Math.random()} id={String(id)}>
            <h3>{name}</h3>
            <p>{companyName}</p>
            <p>{professional_level}</p>

            <button onClick={() =>{ setUserId(id), AdminDeleteUser(id)}}>Desligar</button>
        </li>
    );
}

export default UsersHiredCard;