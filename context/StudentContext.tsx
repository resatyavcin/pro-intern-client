//import Next & React
import { createContext, useMemo, useContext, useState, useEffect } from 'react';
import { Student } from '../common/models/User/Student';

import { deleteStudentPermanentlyService, fetchAllStudent, moveToTrashService } from '../service/studentService';

interface StudentContext {
  allStudents: Student[];
  selectedStudent?: Student[];
  activeFilter: Boolean;
  filterText?: String;
  selectStudent: (student?: Student[]) => void;
  deleteStudentPermanently: (student: Pick<Student, '_id'>[]) => void;
  moveToTrash: (student: Pick<Student, '_id'>[]) => void;
  getFilterAllStudent: () => Student[];
  getTrashFilterStudent: () => Student[];
  setFilterText: (filterText: String) => void;
  setActiveFilter: (active: Boolean) => void;
}

const StudentContext = createContext<StudentContext>({} as StudentContext);

function StudentProvider({ children }: { children: React.ReactNode }): JSX.Element {
  //States
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student[]>();
  const [filterText, setFilterText] = useState<String>('');
  const [activeFilter, setActiveFilter] = useState<Boolean>(false);
  const [updatePage, setUpdatePage] = useState<Boolean>(false);

  const refresh = () => {
    setSelectedStudent([]);
    setActiveFilter(false);
    setUpdatePage(true);
  };

  //Start Function
  useEffect(() => {
    setUpdatePage(false);
    if (
      JSON.parse(localStorage.getItem('user') as string) &&
      JSON.parse(localStorage.getItem('user') as string).role === 'ADMIN'
    ) {
      const init = async () => {
        const response: Student[] = await fetchAllStudent();

        return response;
      };

      init().then((data) => setAllStudents(data));
    }
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

  const getFilterData = (student: Student, filter: String) =>
    student.firstName.toLowerCase().includes(filter.toLowerCase()) ||
    student.lastName.toLowerCase().includes(filter.toLowerCase());

  const getFilterAllStudent = () => {
    const filterData = allStudents.filter((student) => !student.isTrash && getFilterData(student, filterText));

    return filterData;
  };

  const getTrashFilterStudent = () => {
    const filterData = allStudents.filter((student) => student.isTrash && getFilterData(student, filterText));

    return filterData;
  };

  const memoedValue = useMemo(
    () => ({
      allStudents,
      selectedStudent,
      selectStudent,
      deleteStudentPermanently,
      moveToTrash,
      getFilterAllStudent,
      getTrashFilterStudent,
      setFilterText,
      setActiveFilter,
      filterText,
      activeFilter
    }),
    [allStudents, selectStudent, selectedStudent]
  );

  return <StudentContext.Provider value={memoedValue}>{children}</StudentContext.Provider>;
}

export const useStudent = () => useContext(StudentContext);

export default StudentProvider;
