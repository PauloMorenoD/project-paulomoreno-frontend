import { useContext } from "react";
import { companieContext } from "../../context/companieProvider";
import { userContext } from "../../context/userContext";
import { DivComp } from "./styles";


export const ModalDeleteUser = () => {

    const { openModalDeleteUser, setOpenModalDeleteUser } = useContext(userContext)
    const { AdminDeleteUser, userId } = useContext(companieContext)

  return (
    <DivComp>
        <div className="close-modal-div">
            <button className="blue-button" onClick={()=> setOpenModalDeleteUser(!openModalDeleteUser)}>X</button>
        </div>
        <h2>Deseja demitir este usuário ?</h2>
        <button className="dismiss-button" onClick={()=>{ AdminDeleteUser(userId), setOpenModalDeleteUser(!openModalDeleteUser)}}>Demitir</button>
    </DivComp>
  );
}
