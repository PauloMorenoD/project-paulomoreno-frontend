import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { userContext } from "../../context/userContext";
import { Input } from "../Input";
import { DivComp } from "../ModalCreateDepartment/styled";
import { DivInput } from "./styled";

type iHandleSubmitValues = {
    name?: string
    email?: string
    password?: string
}
const ModalUserEdit = () => {

    const { register, handleSubmit } = useForm<iHandleSubmitValues>({})
    const { editUserHimself, openModalEditUser, setOpenModalEditUser, setUserId } = useContext(userContext)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    return <DivComp>
        <div className="title-close-modal-div">
            <h2>Criar departamento</h2>
            <button className="blue-button" onClick={() => setOpenModalEditUser(!openModalEditUser)}>x</button>
        </div>
        <form action="" onSubmit={handleSubmit(editUserHimself)} >
            <div>
                <label htmlFor="">Nome</label>
                <Input placeholder="digite um novo nome" type="text" name="name" register={register} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <div>
                    <Input placeholder="digite um novo email" type="text" name="email" register={register} />
                </div>
            </div>
            <DivInput>
                <label htmlFor="">senha</label>
                <div className="input-view-or-not">
                    <Input placeholder="digite um nova senha" type={isVisible ? "text" : "password"} name="password" register={register} />
                    {isVisible ? <AiFillEyeInvisible onClick={() => setIsVisible(!isVisible)} /> : <AiFillEye onClick={() => setIsVisible(!isVisible)} />}
                </div>
            </DivInput>

            <button className="white-button button-create" >editar informações</button>
        </form>
    </DivComp>;
}

export default ModalUserEdit;