import { useContext } from "react";
import { Header } from "../../components/Header";
import { userContext } from "../../context/userContext";
import { DivComp } from "./styles";
import { AiFillEdit, AiOutlineLoading3Quarters } from "react-icons/ai";
import { WrokerFromDepartmentCommon } from "../../components/WrokerFromDepartmentCOmmon";
import { Modal } from "../../components/Modal";
import ModalUserEdit from "../../components/ModalUserEdit";
export const UserPage = () => {

  const { userData, allDepartmentUsers, openModalEditUser, loading, setOpenModalEditUser, setUserId, logout } = useContext(userContext)

  return (
    <DivComp>
      <Header>
        <button onClick={() => logout()} className="blue-button logout-button">Sair</button>
      </Header>
      <main>
        <section className="user-info-section">
          {userData ?
            <div>
              <div>
                <h2>{userData?.name}</h2>
              </div>
              <div className="user-info-div">
                <p>Email: {userData?.email}</p>
                <p>{userData?.professional_level}</p>
                <p>{userData?.kind_of_work}</p>
              </div>
            </div>
            :
            <div className="loading-div">
              <AiOutlineLoading3Quarters className="loading-spinner" />
            </div>
            }

          <AiFillEdit onClick={() => { setOpenModalEditUser(!openModalEditUser), setUserId(userData?.id) }} />
        </section>
        {loading ? <div>carregando...</div> :
          <section className="blue-button company-info-section">
            {userData?.department ? <div className="user-hired-div">{userData?.department?.company.name} - {userData?.department.name}</div> : <span className="span-user-not-hired">usuário ainda não foi contratado</span>}
          </section>}
        <section className="depart-users-section">
          <ul>
            {allDepartmentUsers.map((worker) => (
              <WrokerFromDepartmentCommon key={worker.name + Math.random()} name={worker.name} professional_level={worker.professional_level} id={worker.id} />
            ))}
          </ul>
        </section>
      </main>
      {openModalEditUser &&
        <Modal>
          <ModalUserEdit />
        </Modal>
      }
    </DivComp>
  );
}
