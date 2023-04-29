import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMenu } from "react-icons/ai";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { userContext } from "../../context/userContext";
import { ButtonLogin } from "../home/styles";
import { DivComp, Main, Span } from "./styles";
import { iUserLoginInfo } from "./types";
import { yupResolver } from '@hookform/resolvers/yup'

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { loginSchema } from "./schema";

export const LoginPage = () => {
  const [buttons, setButtons] = useState<boolean>(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  {isVisible ? <AiFillEyeInvisible onClick={()=>setIsVisible(!isVisible)}/> : <AiFillEye  onClick={()=>setIsVisible(!isVisible)} />}
  const { loginUser } = useContext(userContext)

  const { register, handleSubmit, formState:{errors} } = useForm<iUserLoginInfo>({
    resolver: yupResolver(loginSchema)
  })


  return (
    <DivComp>
      <Header>
        <div className={`button-div ${buttons ? "hidden" : "show"} `}>
          <ButtonLogin to={"/"} className="white-button login">Home</ButtonLogin>
          <ButtonLogin to={"/register"} className="blue-button register">Register</ButtonLogin>
        </div>
        <div className={`hamburguer-div ${buttons ? "show" : "hidden"} `} onClick={() => setButtons(!buttons)}>
          <AiOutlineMenu />
        </div>
      </Header>

      <Main>
        <div className="form-div">
          <form action="" onSubmit={handleSubmit(loginUser)}>
            <h2>login</h2>
            <div>
              <label htmlFor="">E-mail</label>
              <Input placeholder="Digite seu e-mail..." name="email" register={register} type="email" />
            </div>
            {errors.email?.message && <span>{errors.email.message}</span>}
            <div>
              <label htmlFor="">Senha</label>
              <div className="input-view-or-not">
              <Input placeholder="Digite sua senha..." name="password" register={register} type={isVisible ? "password": "text"} />
              {isVisible ? <AiFillEyeInvisible onClick={()=>setIsVisible(!isVisible)}/> : <AiFillEye  onClick={()=>setIsVisible(!isVisible)} />}
              </div>
            {errors.password?.message && <span>{errors.password.message}</span>}
            </div>
            <p>não possui cadastro ? <Span to="/register">cadastre-se aqui</Span></p>
            <button className="blue-button">Entrar</button>
          </form>
        </div>
      </Main>
    </DivComp>
  );
}
