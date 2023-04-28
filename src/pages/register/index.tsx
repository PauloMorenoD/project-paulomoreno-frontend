import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMenu } from "react-icons/ai";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { userContext } from "../../context/userContext";
import { iRegisterUser } from "../../context/userContext/types";
import { ButtonLogin } from "../home/styles";
import { DivComp, Main, Span } from "./styles";

export const RegisterPage = () => {
  const [buttons, setButtons] = useState<boolean>(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  { isVisible ? <AiFillEyeInvisible onClick={() => setIsVisible(!isVisible)} /> : <AiFillEye onClick={() => setIsVisible(!isVisible)} /> }

  const { register, handleSubmit } = useForm<iRegisterUser>({})

  const { registerUser } = useContext(userContext)

  return (
    <DivComp>
      <Header>
        <div className={`button-div ${buttons ? "hidden" : "show"} `}>
          <ButtonLogin to={"/"} className="white-button login">Home</ButtonLogin>
          <ButtonLogin to={"/login"} className="blue-button register">Login</ButtonLogin>
        </div>
        <div className={`hamburguer-div ${buttons ? "show" : "hidden"} `} onClick={() => setButtons(!buttons)}>
          <AiOutlineMenu />
        </div>
      </Header>
      <Main>
        <div className="form-div">
          <form action="" onSubmit={handleSubmit(registerUser)}>
            <h2>Register</h2>
            <div>
              <label htmlFor="">E-mail</label>
              <Input placeholder="Digite um e-mail..." name="email" register={register} type="email" />
            </div>
            <div>
              <label htmlFor="">Nome</label>
              <Input placeholder="Digite um nome..." name="name" register={register} type="text" />
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <div className="input-view-or-not">
                <Input placeholder="Digite uma senha..." name="password" register={register} type={isVisible?"text":"password"} />
                {isVisible ? <AiFillEyeInvisible onClick={()=>setIsVisible(!isVisible)}/> : <AiFillEye  onClick={()=>setIsVisible(!isVisible)} />}
              </div>
            </div>
            <div>
              <label htmlFor="">Modelo de trabalho</label>
              <Input placeholder="Sua modalidade de trabalho" name="kind_of_work" register={register} type="text" />
            </div>
            <div>
              <label htmlFor="">Nível profissional</label>
              <Input placeholder="o seu nível profissional" name="professional_level" register={register} type="text" />
            </div>
            <button className="blue-button">Cadastrar-se</button>
          </form>
        </div>
      </Main>
    </DivComp>
  );
}
