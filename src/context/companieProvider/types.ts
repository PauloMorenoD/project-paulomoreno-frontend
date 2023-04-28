import { iSectors } from "../../pages/home/types"
import { iCompanieArr, iDepartment, iUser } from "../globaTypes"

export interface iCompanieProviderValue{
    sectors: iSectors[]
    companies: iCompanieArr[]
    companiesPerSector:iCompanieArr[]
    companieDepartments:iDepartment[]
    companieUsers:iUser[]
    companyId:string
    login:boolean
    specificDepartment:number | undefined
    departId:number
    userName:string
    userId:number 
    department:iDepartment[]
    setCompaniesPerSector: React.Dispatch<React.SetStateAction<iCompanieArr[]>>
    getCompaniesFromSector: (name: string) => void
    setCompanieDepartments: React.Dispatch<React.SetStateAction<iDepartment[]>>
    getDepartmentsFromCompanies: (id: string) => void
    getUserDepartment: (id: number) => Promise<void>
    setCompanieUsers: React.Dispatch<React.SetStateAction<iUser[]>>
    createNewDepartment: ( data: any) => Promise<void>
    setCompanyId: React.Dispatch<React.SetStateAction<string>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    setDepartId: React.Dispatch<React.SetStateAction<number>>
    setUserName: React.Dispatch<React.SetStateAction<string>>
    hireWorker: () => Promise<void>
    AdminEditUser: (data: any) => Promise<void>
    setUserId: React.Dispatch<React.SetStateAction<number>>
    AdminDeleteUser: (id:number) => Promise<void>
    setSpecificDepartment: React.Dispatch<React.SetStateAction<number | undefined>>
    setDepartment: React.Dispatch<React.SetStateAction<iDepartment[]>>
    modalDepartHireWorker: (id:number) => Promise<void>

    
}
export interface iCompanieProviderProps{
    children:React.ReactNode
}