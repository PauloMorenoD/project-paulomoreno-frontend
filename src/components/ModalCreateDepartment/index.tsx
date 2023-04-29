import { useContext } from "react"
import { companieContext } from "../../context/companieProvider"
import { Options } from "../CompanieOptions"
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { userContext } from "../../context/userContext";
import { DivComp } from "./styles";


export const ModalCreateDepartment = () => {

    interface iHandleSubmitValues {
        name: string;
        description: string;
    }

    const { companies, createNewDepartment, setCompanyId } = useContext(companieContext)
    const { openModal, setOpenModal } = useContext(userContext)

    const { register, handleSubmit } = useForm<iHandleSubmitValues>({})
    return (
        <DivComp>
            <div className="title-close-modal-div">
                <h2>Criar departamento</h2>
                <button className="blue-button" onClick={() => setOpenModal(!openModal)}>x</button>
            </div>
            <form action="" onSubmit={handleSubmit(createNewDepartment)} >
                <div>
                    <label htmlFor="">Nome do departamento</label>
                    <Input placeholder="Nome do departamento" type="text" name="name" register={register} />
                </div>
                <div>
                    <label htmlFor="">Descrição</label>
                    <Input placeholder="Descrição" type="text" name="description" register={register} />
                </div>
                <div>
                    <label htmlFor="">selecione a companhia</label>
                    <select className="blue-button" name="" id="" onChange={(e) => setCompanyId(e.target.value)}>
                        <option value="Selecionar empresa" >Selecionar empresa</option>
                        {companies.map(companie => (
                            <Options key={companie.name} name={companie.name} id={companie.id} />
                        ))}
                    </select>
                </div>
                <button className="white-button button-create">criar departamento</button>
            </form>
        </DivComp>
    )
}
