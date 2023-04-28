import { Header } from "../../components/Header";
import { ButtonLogin, DivComp, Main } from "./styles";
import { AiOutlineMenu } from "react-icons/ai"
import { useContext, useState } from "react";

import { companieContext } from "../../context/companieProvider";
export const Home = () => {

  const [buttons, setButtons] = useState<boolean>(true)

  const { sectors, companiesPerSector, getCompaniesFromSector } = useContext(companieContext)

  return (
    <DivComp>
      <Header>
        <div className={`button-div ${buttons ? "hidden" : "show"} `}>
          <ButtonLogin to={"/login"} className="white-button login">Login</ButtonLogin>
          <ButtonLogin to={"/register"} className="blue-button register">Register</ButtonLogin>

        </div>
        <div className={`hamburguer-div ${buttons ? "show" : "hidden"} `} onClick={() => setButtons(!buttons)}>
          <AiOutlineMenu />
        </div>
      </Header>
      <Main>
        <div className="div-sectors">
          <select name="" id="" className="blue-button" onChange={(e) => getCompaniesFromSector(e.target.value)}>
            <option value="selecione um setor">selecione um setor</option>

            {sectors.map((sector) => (
              <option key={sector.id} id={String(sector.id)} value={sector.name}>{sector.name}</option>
            ))}
          </select>
        </div>
        <div className="div-companies">
          <h2>Empresas do setor</h2>
          <ul>
            {companiesPerSector.map((companie) => (
              <li key={companie.id} id={String(companie.id)}>
                <h3>{companie.name}</h3>
                <p> <strong>abre às:</strong> {companie.opening_hours} <strong>hrs</strong></p>
                <span>{companie.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </DivComp>
  );
}
