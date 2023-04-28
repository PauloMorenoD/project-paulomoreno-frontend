import { useContext } from "react";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { companieContext } from "../../context/companieProvider";
import { userContext } from "../../context/userContext";
import { iUserCardProps } from "./types";


export const DepartmentsCard = ({ id, name, description, companyName }: iUserCardProps) => {

    const { openModalHire, setOpenModalHire,  getAllHiredUsersFromDepartment, getAllUsersNotHired } = useContext(userContext)

    const { setSpecificDepartment, modalDepartHireWorker } = useContext(companieContext)

    return (
        <li id={String(id)}>
            <div className="info-div">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{companyName}</p>
            </div>
            <div className="icons-div">
                <AiFillEye className="eye"  onClick={() => { setOpenModalHire(!openModalHire), setSpecificDepartment(id), getAllHiredUsersFromDepartment(id), getAllUsersNotHired(), modalDepartHireWorker(id) }}/>
                <AiFillEdit className="edit" />
                <AiFillDelete className="delete" />
            </div>
        </li>
    );
}
