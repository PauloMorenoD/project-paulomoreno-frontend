export interface iSector {
    id: number;
    name: string;
}

export interface iCompanieArr extends iCompany{
    sector:iSector
}

export interface iCompany{
    id:number;
    name:string;
    opening_hours:string;
    description:string;
}

export interface iDepartment{
    id:number;
    name:string;
    description:string;
    company: iCompany;
}

export interface iUser {
    id:number
    name:string
    email:string
    professional_level:string
    kind_of_work:string
    is_admin:boolean
    department: iDepartment | null
}

export interface iCreatenNwDepartment{
    name:string
    description:string
    companyId:string
}