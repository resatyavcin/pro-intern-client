import { DEPARTMENT_CODE } from "../../constants/departmentCode/departmentCode";

export interface Student {
    _id: String;
    role: String,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    republicOfTurkeyId: string;
    phone: string;
    schoolNumber: string;
    departmentCode: DEPARTMENT_CODE;
    grade: string;
    interns: Array<String>,
    remainingIntern: Number,
    isBlocked: Boolean,
    isTrash: Boolean,
    isVerified: Boolean,
    tokens: Array<Object>,
    rightOfEntry: Number,
    updatedAt: string,
    createdAt: string
}