import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { DivComp } from "../ModalCreateDepartment/styles";
import { useForm } from "react-hook-form";
import { companieContext } from "../../context/companieProvider";

export const ModalAdminEditUser = () => {
    interface iHandleSubmitValues {
        kind_of_work: string;
        professional_level: string;
    }
    const { openModalAdminEditUser, setOpenModalAdminEditUser, } = useContext(userContext)
    const { AdminEditUser } = useContext(companieContext)
    const { register, handleSubmit } = useForm<iHandleSubmitValues>({})

    return (
        <DivComp>
            <div className="title-close-modal-div">
                <h2>Criar departamento</h2>
                <button className="blue-button" onClick={() => setOpenModalAdminEditUser(!openModalAdminEditUser)}>x</button>
            </div>
            <form action="" onSubmit={handleSubmit(AdminEditUser)} >
                <div>
                    <label htmlFor="">Modalidade de trabalho</label>
                    <select id="" {...register("kind_of_work")}>
                        <option value="selecione uma modalidade">selecione uma modalidade</option>
                        <option value="presencial">presencial</option>
                        <option value="home-office">home-office</option>
                        <option value="híbrido">híbrido</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Nível profissional</label>
                    <select {...register("professional_level")} id="">
                        <option value="selecione um nível profissional">selecione um nível profissional</option>
                        <option value="estágio">Estágio</option>
                        <option value="júnior">Júnior</option>
                        <option value="Pleno">Pleno</option>
                        <option value="Sênior">Sênior</option>
                    </select>
                </div>
                <div>
                </div>
                <button className="blue-button button-create">editar usuário</button>
            </form>
        </DivComp>
    );
}

