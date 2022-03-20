//import Next & React
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

//import Commons
import { DEPARTMENT_CODE } from '../common/constants/departmentCode/departmentCode';

interface IUser {
  id?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
  student_no?: string;
  phone?: string;
  email?: string;
  department_code?: DEPARTMENT_CODE;
  grade?: number;
}

export type contextType = {
  allStudent: IUser[] | null;
  setAllStudent: Dispatch<SetStateAction<IUser[] | null>>;
  selectStudent: IUser | null;
  setSelectStudent: Dispatch<SetStateAction<IUser | null>>;
};

const contextDefaultValues: contextType = {
  allStudent: [
    {
      id: 'KQJFIWE7237852JKWF',
      role: 'student',
      first_name: 'Reşat',
      last_name: 'YAVÇİN',
      student_no: '181906114',
      phone: '+905457430302',
      email: 'resatyavcin@outlook.com',
      department_code: DEPARTMENT_CODE.CE,
      grade: 4
    },
    {
      id: 'YHFKDF7679HFH',
      role: 'student',
      first_name: 'Mehmet',
      last_name: 'SARIGÖL',
      student_no: '181996814',
      phone: '+905784563423',
      email: 'mehmet03003@icloud.com',
      department_code: DEPARTMENT_CODE.FE,
      grade: 8
    },
    {
      id: 'YHFKDF7FJEFUE679HFH',
      role: 'student',
      first_name: 'Tuba',
      last_name: 'KOCABIYIK',
      student_no: '110998811',
      phone: '+907368338383',
      email: 'tubiss@icloud.com',
      department_code: DEPARTMENT_CODE.CE,
      grade: 3
    }
  ],
  selectStudent: {},
  setAllStudent: () => [],
  setSelectStudent: () => {}
};

const StudentContext = createContext<contextType>(contextDefaultValues);

export const StudentProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [allStudent, setAllStudent] = useState<IUser[] | null>(contextDefaultValues.allStudent);
  const [selectStudent, setSelectStudent] = useState<IUser | null>(contextDefaultValues.selectStudent);

  const values: contextType = { allStudent, selectStudent, setAllStudent, setSelectStudent };

  return <StudentContext.Provider value={values}>{children}</StudentContext.Provider>;
};

export const useStudent = () => useContext(StudentContext);

// const defaultStudent: IUser[] = [
//   {
//     id: 'KQJFIWE7237852JKWF',
//     role: 'student',
//     first_name: 'Reşat',
//     last_name: 'YAVÇİN',
//     student_no: '181906114',
//     phone: '+905457430302',
//     email: 'resatyavcin@outlook.com',
//     department_code: DEPARTMENT_CODE.CE,
//     grade: 4
//   },
//   {
//     id: 'YHFKDF7679HFH',
//     role: 'student',
//     first_name: 'Mehmet',
//     last_name: 'SARIGÖL',
//     student_no: '181996814',
//     phone: '+905784563423',
//     email: 'mehmet03003@icloud.com',
//     department_code: DEPARTMENT_CODE.FE,
//     grade: 8
//   },
//   {
//     id: 'YHFKDF7FJEFUE679HFH',
//     role: 'student',
//     first_name: 'Tuba',
//     last_name: 'KOCABIYIK',
//     student_no: '110998811',
//     phone: '+907368338383',
//     email: 'tubiss@icloud.com',
//     department_code: DEPARTMENT_CODE.CE,
//     grade: 3
//   }
// ];
