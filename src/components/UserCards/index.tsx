import { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { companieContext } from "../../context/companieProvider";
import { userContext } from "../../context/userContext";
import { iUserCardProps } from "./types";

export const UserCard = ({ id, name, professional_level, companyName }: iUserCardProps) => {

    const {openModalAdminEditUser, setOpenModalAdminEditUser, setOpenModalDeleteUser,openModalDeleteUser } = useContext(userContext)
    const { setUserId } = useContext(companieContext)



    return (
        <li key={name} id={String(id)}>
            <div className="user-info-div">
                <h3>{name}</h3>
                <p>{professional_level}</p>
                <p>{companyName}</p>
            </div>
            <div className="edit-delete-div">
                <AiFillEdit className="edit"  onClick={() =>{ setOpenModalAdminEditUser(!openModalAdminEditUser), setUserId(id)}}/>
                <AiFillDelete className="delete" onClick={() =>{ setOpenModalDeleteUser(!openModalDeleteUser), setUserId(id)}} />
            </div>
        </li>
    );
}
