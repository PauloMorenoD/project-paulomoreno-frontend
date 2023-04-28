import { useContext } from "react";
import { Header } from "../../components/Header";
import { companieContext } from "../../context/companieProvider";
import { userContext } from "../../context/userContext";
import { DivComp } from "./style";
import { DepartmentsCard } from "../../components/DepartmentsCards";
import { UserCard } from "../../components/UserCards";
import { Modal } from "../../components/Modal";
import { ModalCreateDepartment } from "../../components/ModalCreateDepartment";
import { Options } from "../../components/CompanieOptions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ModalHire } from "../../components/ModalHire";
import { ModalAdminEditUser } from "../../components/ModalAdminEditUser";
import { ModalDeleteUser } from "../../components/ModalDeleteUser";

export const AdmPage = () => {
  const { logout, openModal, setOpenModal, openModalHire, openModalAdminEditUser, openModalDeleteUser } = useContext(userContext)
  const { companies, getDepartmentsFromCompanies, companieDepartments, companieUsers, login } = useContext(companieContext)
  
  return (
    <DivComp>
      <Header>
        <button onClick={() => logout()} className="blue-button logout-button">Sair</button>
      </Header>
      <main>
        <section className="departments-select-section">
          <h2>Departamentos</h2>

          <select name="" id="" onChange={(e) => getDepartmentsFromCompanies(e.target.value)}>
            <option value="Selecionar empresa">Selecionar empresa</option>
            {companies.map(companie => (
              <Options key={companie.name} name={companie.name} id={companie.id} />
            ))
            }
          </select>
          <button className="blue-button create-button" onClick={() => setOpenModal(!openModal)}>+ Criar</button>
        </section>
        {login ?
          <div className="loading-div">
            <AiOutlineLoading3Quarters className="loading-spinner" />
          </div>
          :
          <>
            <section className="departments-view-section">
              {companieDepartments.length ?
                <ul>
                  {companieDepartments.map((department: any) => (
                    <DepartmentsCard
                      key={department.name + Math.random()}
                      id={department.id}
                      name={department.name}
                      description={department.description}
                      companyName={department.company.name} />
                  ))}
                </ul> :
                <div className="no-departments-div">Não há empresas cadastradas neste departmento</div>
              }
            </section>
            <section className="user-section">
              <h2>Usuários Cadastrados</h2>
              {companieUsers.length ?
                <ul>
                  {companieUsers.map((user) => (
                    <UserCard
                      key={user.name + Math.random()}
                      id={user.id}
                      name={user.name}
                      professional_level={user.professional_level}
                      companyName={user.department?.company?.name}
                    />
                  ))}
                </ul> :
                <div className="no-users">não há usuários contratados nesta empresa</div>}
            </section>
          </>
        }
      </main>
      {openModal &&
        <Modal>
          <ModalCreateDepartment />
        </Modal>
      }

      {openModalHire &&
        <Modal>
          <ModalHire />
        </Modal>
      }

      {openModalAdminEditUser &&
        <Modal>
          <ModalAdminEditUser />
        </Modal>
      }

      {openModalDeleteUser &&
        <Modal>
          <ModalDeleteUser/>
        </Modal>
      }

    </DivComp>
  );
}
