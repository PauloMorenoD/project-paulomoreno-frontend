import { useContext } from "react";
import { companieContext } from "../../context/companieProvider";
import { iUser } from "../../context/globaTypes";
import { userContext } from "../../context/userContext";
import UsersHiredCard from "../UsersHiredCard";
import { DivComp } from "./styles"


export const ModalHire = () => {

    const { allUsersHired, openModalHire, setOpenModalHire, allUsersNotHired } = useContext(userContext)
    const { department, hireWorker, setUserName } = useContext(companieContext)

    return (
        <DivComp>
            <section className="companie-info-section">
                <button className="blue-button button-close-modal" onClick={() => setOpenModalHire(!openModalHire)}>X</button>
                <div className="companie-info-div">
                    <h3>{department[0].name}</h3>
                    <p>{department[0].company.name}</p>
                </div>
                <div className="hire-user-div">
                    <select name="" id="" onChange={(e) => setUserName(e.target.value)}>
                        <option value="selecione um usuário">selecione um usuário</option>
                        {allUsersNotHired.map((elem) => (
                            <option key={elem.name + Math.random()} value={elem.name}>{elem.name}</option>
                        ))}
                    </select>
                    <button className="blue-button" onClick={() => hireWorker()}>Contratar</button>
                </div>
            </section>
            <section className="users-section">
                    <ul>
                        {allUsersHired.map((user: iUser) => (
                            <UsersHiredCard key={user.name + Math.random()} id={user.id} name={user.name} companyName={user.department?.company.name} professional_level={user.professional_level}/>
                        ))}
                    </ul>
            </section>
        </DivComp>
    )
        ;
}

