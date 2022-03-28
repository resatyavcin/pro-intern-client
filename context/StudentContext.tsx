//import Next & React
import { createContext, useMemo, useContext, useState } from 'react';

//import Commons
import { DEPARTMENT_CODE } from '../common/constants/departmentCode/departmentCode';

interface IUser {
  id?: string;
  first_name?: string;
  last_name?: string;
  student_no?: string;
  phone?: string;
  email?: string;
  department_code?: DEPARTMENT_CODE;
  grade?: number;
}

interface StudentContext {
  allStudents: IUser[];
  selectedUser?: IUser;
  selectUser?: () => void;
}

const StudentContext = createContext<StudentContext>({} as StudentContext);

function StudentProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [allStudents, setAllStudents] = useState<IUser[]>(students);
  const [selectedUser, setSelectedUser] = useState<IUser>();

  const selectUser = (select?: []) => {
    console.log(select);
  };
  const memoedValue = useMemo(
    () => ({
      allStudents,
      selectedUser,
      selectUser
    }),
    [allStudents, selectedUser]
  );

  return <StudentContext.Provider value={memoedValue}>{children}</StudentContext.Provider>;
}

export const useStudent = () => useContext(StudentContext);

export const students = [
  {
    id: 'KQJFIWE7237852JKWF',
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
    first_name: 'Tuba',
    last_name: 'KOCABIYIK',
    student_no: '110998811',
    phone: '+907368338383',
    email: 'tubiss@icloud.com',
    department_code: DEPARTMENT_CODE.CE,
    grade: 3
  }
];

export default StudentProvider;
