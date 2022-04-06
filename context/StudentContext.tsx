//import Next & React
import { createContext, useMemo, useContext, useState, useEffect } from 'react';
import { Student } from '../common/models/User/Student';

import { deleteStudentPermanentlyService, fetchAllStudent, moveToTrashService } from '../service/studentService';

interface StudentContext {
  allStudents: Student[];
  selectedStudent?: Student[];
  selectStudent: (student?: Student[]) => void;
  deleteStudentPermanently: (student: Pick<Student, '_id'>[]) => void;
  moveToTrash: (student: Pick<Student, '_id'>[]) => void;
}

const StudentContext = createContext<StudentContext>({} as StudentContext);

function StudentProvider({ children }: { children: React.ReactNode }): JSX.Element {
  //States
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student[]>();
  const [updatePage, setUpdatePage] = useState<Boolean>(false);

  const refresh = () => {
    setSelectedStudent([]);
    setUpdatePage(true);
  };

  //Start Function
  useEffect(() => {
    setUpdatePage(false);
    const init = async () => {
      const response: Student[] = await fetchAllStudent();
      return response;
    };
    init().then((data) => setAllStudents(data));
  }, [updatePage]);

  //Functions
  const selectStudent = (student?: Student[]) => {
    setSelectedStudent(student);
  };

  const deleteStudentPermanently = async (students: Pick<Student, '_id'>[]) => {
    const response = await deleteStudentPermanentlyService(students);
    refresh();
    console.log(response);
  };

  const moveToTrash = async (students: Pick<Student, '_id'>[]) => {
    const response = await moveToTrashService(students);
    refresh();
    console.log(response);
  };

  const memoedValue = useMemo(
    () => ({
      allStudents,
      selectedStudent,
      selectStudent,
      deleteStudentPermanently,
      moveToTrash
    }),
    [allStudents, selectStudent, selectedStudent]
  );

  return <StudentContext.Provider value={memoedValue}>{children}</StudentContext.Provider>;
}

export const useStudent = () => useContext(StudentContext);

export default StudentProvider;
