import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosFetch } from "../../services/config";
import { iUser } from "../globaTypes";
import { iLoginUser, iRegisterUser, iUserProviderProps, iUserProviderValue } from "./types";

export const userContext = createContext({} as iUserProviderValue)

export const UserProvider = ({ children }: iUserProviderProps) => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openModalHire, setOpenModalHire] = useState<boolean>(false)
    const [openModalDeleteUser, setOpenModalDeleteUser] = useState<boolean>(false)
    const [openModalAdminEditUser, setOpenModalAdminEditUser] = useState<boolean>(false)
    const [openModalEditUser, setOpenModalEditUser] = useState<boolean>(false)
    const [allUsers, setAllUsers] = useState<iUser[]>([])
    const [allUsersNotHired, setAllUsersNotHired] = useState<iUser[]>([])
    const [allUsersHired, setAllUsersHired] = useState<iUser[]>([])
    const [departId, setDepartId] = useState<number>(0)
    const [userData, setUserData] = useState<iUser | undefined>()
    const [allDepartmentUsers, setAllDepartmentUsers] = useState<iUser[]>([])
    const [userId, setUserId] = useState<number | undefined>(0)
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/login")
    }
    const token = localStorage.getItem("@pauloCompanies:token")

    useEffect(() => {

        const getAllUsers = async () => {

            const response = await axiosFetch.get("/users")

            const data = response.data

            setAllUsers(data)
        }
        getAllUsers()



    }, [])

    useEffect(() => {
        setLoading(true)
        if (token) {
            try {
                axiosFetch.defaults.headers.authorization = `Bearer ${token}`

                const getLoggedUser = async () => {
                    const response = await axiosFetch.get("users/logged")
                    const data = response.data
                    setUserData(data)
                }
                const allUsersFromDepartment = () => {

                    if(userData){
                        if(userData.department === null) return
                        const sameDepartmentUsers = allUsers.filter(elem => elem.department?.id == userData?.department?.id)
                        
                        setAllDepartmentUsers(sameDepartmentUsers)
                    }

                }

                allUsersFromDepartment()

                getLoggedUser()
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }, [token])


    useEffect(() => {
        const allUsersFromDepartment = () => {

            const sameDepartmentUsers = allUsers.filter(elem => elem.department?.id == userData?.department?.id)

            setAllDepartmentUsers(sameDepartmentUsers)
        }

        allUsersFromDepartment()
    }, [userData])

    const editUserHimself = async (data: any) => {
        try {
            axiosFetch.defaults.headers.authorization = `Bearer ${token}`
            const response = await axiosFetch.patch("/users/" + userId, data)

            const userInfo = response.data
            console.log(userInfo)
            setUserData(userInfo)

            toast.success("usuário cadastrado com sucesso")
        } catch (error) {

        }
    }

    const getAllUsersNotHired = async () => {

        const allUsersNoHired = allUsers.filter(elem => elem.department === null)

        setAllUsersNotHired(allUsersNoHired)
    }



    const getAllHiredUsersFromDepartment = async (id: number) => {

        const usersHired = allUsers.filter((user: any) => user.department?.id == id)

        setAllUsersHired(usersHired)
    }


    const loginUser = async (data: iLoginUser) => {
        try {
            const response = await axiosFetch.post("/login", data)

            const resData = response.data

            localStorage.setItem("@pauloCompanies:token", resData.token)

            toast.success("login realizado com sucesso")

            if (resData.admin === true) {
                navigate('/admin')
            } else {
                navigate('/common')
            }
        } catch (error) {
            toast.error('O email ou a senha estão incorretos')
        }
    }
    const registerUser = async (data: iRegisterUser) => {

        try {
            await axiosFetch.post("/users", data)

            toast.success("usuário cadastrado com sucesso")
            navigate("/login")
        } catch (error) {

            toast.error('Ops, algo deu errado')
        }
    }


    return (
        <userContext.Provider value={{
            openModalHire,
            openModalDeleteUser,
            openModal,
            openModalAdminEditUser,
            allUsers,
            allUsersHired,
            departId,
            allUsersNotHired,
            userData,
            allDepartmentUsers,
            openModalEditUser,
            userId,
            loading,
            loginUser,
            registerUser,
            logout,
            setOpenModal,
            setOpenModalHire,
            setOpenModalDeleteUser,
            setOpenModalAdminEditUser,
            setDepartId,
            getAllHiredUsersFromDepartment,
            setAllUsersNotHired,
            getAllUsersNotHired,
            setAllUsersHired,
            setUserData,
            setAllDepartmentUsers,
            editUserHimself,
            setOpenModalEditUser,
            setUserId,
            setLoading
        }}>
            {children}
        </userContext.Provider>
    )
}