import { iUser } from "../globaTypes";

export interface iUserProviderValue {
    registerUser: (data: iRegisterUser) => void;
    loginUser: (data: iLoginUser) => void;

    logout: () => void
    openModal: boolean
    openModalHire:boolean
    openModalDeleteUser:boolean
    openModalAdminEditUser:boolean
    allUsers: iUser[]
    allUsersHired:iUser[]
    allUsersNotHired:iUser[]
    departId: number
    userData: iUser | undefined
    allDepartmentUsers: iUser[]
    openModalEditUser: boolean
    userId: number | undefined
    loading: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalHire : React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalDeleteUser : React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalAdminEditUser : React.Dispatch<React.SetStateAction<boolean>>
    setDepartId : React.Dispatch<React.SetStateAction<number>>
    getAllHiredUsersFromDepartment: (id: number) => Promise<void>
    setAllUsersNotHired: React.Dispatch<React.SetStateAction<iUser[]>>
    getAllUsersNotHired: () => Promise<void>
    setAllUsersHired: React.Dispatch<React.SetStateAction<iUser[]>>
    setUserData: React.Dispatch<React.SetStateAction<iUser | undefined>>
    setAllDepartmentUsers: React.Dispatch<React.SetStateAction<iUser[]>>
    editUserHimself:(data:any)=> void
    setOpenModalEditUser: React.Dispatch<React.SetStateAction<boolean>>
    setUserId: React.Dispatch<React.SetStateAction<number | undefined>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
export interface iUserProviderProps {
    children: React.ReactNode;
  }
  
export interface iLoginUser {
    email : string;
    password : string;
  }
export interface iRegisterUser {
    name: string;
    email: string;
    password: string;
    professional_level: string;
    kind_of_work: string;
  }
  