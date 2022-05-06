import { DEPARTMENT_CODE } from "../../constants/departmentCode/departmentCode";

export interface Student {
    _id: string;
    role: string,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    republicOfTurkeyId: string;
    phone: string;
    schoolNumber: string;
    departmentCode: DEPARTMENT_CODE;
    grade: string;
    interns: Array<string>,
    remainingIntern: number,
    isBlocked: boolean,
    isTrash: boolean,
    isVerified: boolean,
    tokens: Array<object>,
    rightOfEntry: Number,
    updatedAt: string,
    createdAt: string
}