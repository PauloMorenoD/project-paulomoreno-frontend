import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iUserCardProps } from "../../components/DepartmentsCards/types";
import { iCompanies, iSectors } from "../../pages/home/types";
import { axiosFetch } from "../../services/config";
import { iCompanieArr, iCreatenNwDepartment, iDepartment, iUser } from "../globaTypes";
import { userContext } from "../userContext";
import { iCompanieProviderValue, iCompanieProviderProps } from "./types";

export const companieContext = createContext({} as iCompanieProviderValue)

export const CompanieProvider = ({ children }: iCompanieProviderProps) => {

  const [sectors, setSectors] = useState<iSectors[]>([])
  const [companies, setCompanies] = useState<iCompanieArr[]>([])
  const [companiesPerSector, setCompaniesPerSector] = useState<iCompanieArr[]>([])
  const [companieDepartments, setCompanieDepartments] = useState<iDepartment[]>([])
  const [companieUsers, setCompanieUsers] = useState<iUser[]>([])
  const [companyId, setCompanyId] = useState<string>('')
  const [login, setLogin] = useState<boolean>(false)
  const [specificDepartment, setSpecificDepartment] = useState<number | undefined>()
  const [departId, setDepartId] = useState<number>(0)
  const [userName, setUserName] = useState<string>('')
  const [allUsers, setAllUsers] = useState<iUser[]>([])
  const [userId, setUserId] = useState<number>(0)
  const[department, setDepartment] = useState<iDepartment[]>([])

  const { setAllUsersHired } = useContext(userContext)

  const token = localStorage.getItem("@pauloCompanies:token")

  useEffect(() => {
    const getSectors = async () => {

      const response = await axiosFetch.get('/sectors')
      const data = response.data

      setSectors(data)
    }

    getSectors()
    const getCompanies = async () => {

      const response = await axiosFetch.get('/companies')

      const data = response.data

      setCompanies(data)
    }
    getCompanies()

    const getAllUsers = async () => {

      const response = await axiosFetch.get("/users")
      
      const data = response.data
      
      setAllUsers(data)
    }
    getAllUsers()
    
  }, [])
  

  const getCompaniesFromSector = (name: string) => {

    const specificCompanies = companies.filter((elem => elem.sector.name == name))

    setCompaniesPerSector(specificCompanies)
  }



  const getDepartmentsFromCompanies = async (name: string) => {
    try {
      setLogin(true)

      if (name == "Selecionar empresa") return false

      const companie = companies.filter((elem) => elem.name == name)

      const idToNumber = +companie[0].id

      axiosFetch.defaults.headers.authorization = `Bearer ${token}`

      const response = await axiosFetch.get(`/departments/${idToNumber}`)

      const departments = response.data

      setCompanieDepartments(departments)

      getUserDepartment(idToNumber)

    } catch (error) {

      toast.error("ops, algo deu errado!")
    } finally {
      setLogin(false)
    }
  }



  const getUserDepartment = async (id: number) => {

    setLogin(true)
    try {

      const users = allUsers.filter((elem: iUser) => elem.department?.company.id == id)

      setCompanieUsers(users)

    } catch (error) {

    } finally {
      setLogin(false)
    }

  }

  const createNewDepartment = async (data: iCreatenNwDepartment) => {

    try {
      const companie = companies.filter((elem) => elem.name == companyId)

      const departData = {
        ...data,
        companyId: companie[0].id
      }

      axiosFetch.defaults.headers.authorization = `Bearer ${token}`
      const response = await axiosFetch.post("/departments", departData)

      setCompanieDepartments((old) => [...old, response.data])

      toast.success("departamento criado com sucesso")
    } catch (error) {

      toast.error("ops, algo deu errado!")
    }

  }

  const modalDepartHireWorker = async (id:number) => {
    const department = companieDepartments.filter(depart => depart.id == id)
    
    setDepartment(department)
  }

  const hireWorker = async () => {

    try {
      const user = allUsers.filter((user: iUser) => user.name == userName)

      const hireUserData = {
        user_id: user[0].id,
        department_id: department[0].id
      }

      const responseHired = await axiosFetch.patch("/departments/hire", hireUserData)

      const dataHired = responseHired.data

      setCompanieUsers((old) => [...old, dataHired])

      toast.success("usuário contratado com sucesso")
    } catch (error) {
      toast.error("ops, algo deu errado")

    }
  }

  const AdminEditUser = async (data: any) => {

    try {
      axiosFetch.defaults.headers.authorization = `Bearer ${token}`

      const response = await axiosFetch.patch("/users/" + userId, data)
      const userRes:iUser = response.data
      setCompanieUsers((old)=>[...old, userRes])

      toast.success("usuário editado!")
    } catch (error) {

      toast.error('Ops, algo deu errado')
    }
  }
  const AdminDeleteUser = async (id:number) => {

    try {
      axiosFetch.defaults.headers.authorization = `Bearer ${token}`

      const user = allUsers.filter((user) => user.id === id)

      await axiosFetch.patch("/departments/dismiss/" + id)

      const users = allUsers.filter((elem: iUser) => elem.department?.company.name == user[0].department!.company.name)

      setCompanieUsers(users)

      toast.success("usuário demitido!")
    } catch (error) {
      toast.error('Ops, algo deu errado')
    }
  }

  return (
    <companieContext.Provider value={{
      sectors,
      companies,
      companiesPerSector,
      companieDepartments,
      companieUsers,
      companyId,
      login,
      specificDepartment,
      departId,
      userName,
      userId,
      department, 
      setCompaniesPerSector,
      getCompaniesFromSector,
      setCompanieDepartments,
      getDepartmentsFromCompanies,
      getUserDepartment,
      setCompanieUsers,
      createNewDepartment,
      setCompanyId,
      setLogin,
      setDepartId,
      hireWorker,
      setUserName,
      AdminEditUser,
      setUserId,
      AdminDeleteUser,
      setSpecificDepartment,
      setDepartment,
      modalDepartHireWorker
    }}>
      {children}
    </companieContext.Provider>
  )
}