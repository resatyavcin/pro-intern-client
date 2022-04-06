import { DEPARTMENT_CODE } from "../../constants/departmentCode/departmentCode";

export interface Student {
    _id: String;
    role: String,
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    republicOfTurkeyId: String;
    phone: String;
    schoolNumber: String;
    departmentCode: DEPARTMENT_CODE;
    grade: String;
    interns: Array<String>,
    remainingIntern: Number,
    isBlocked: Boolean,
    isTrash: Boolean,
    isVerified: Boolean,
    tokens: Array<Object>,
    rightOfEntry: Number,
    updatedAt: String,
    createdAt: String
}