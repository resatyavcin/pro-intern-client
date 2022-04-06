//import react
import React, { useState } from 'react';

//import layout
import MainLayout from '../core/MainLayout';

//import Components
import TableUI from '../components/ui/table/Table';
import ButtonUI from '../components/ui/button/buttonUI';
import TypographyUI from '../components/ui/typography/Typography';

import { Row } from 'antd';
import { Student } from '../common/models/User/Student';

import { DEPARTMENT_CODE } from '../common/constants/departmentCode/departmentCode';
import { useStudent } from '../context/StudentContext';
import { departmentCodeConverter } from '../common/utils/departmentCodeConverter';
import InputUI from '../components/ui/form/inputUI';
import FormUI from '../components/ui/form/formUI';
import { SearchOutlined } from '@ant-design/icons';
const columns = [
  {
    title: <TypographyUI typographyType="text" label={'COLUMN.FIRST_NAME'} />,
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text: any) => <a>{text}</a>
  },
  {
    title: <TypographyUI typographyType="text" label={'COLUMN.LAST_NAME'} />,
    dataIndex: 'lastName',
    key: 'lastName',
    render: (text: any) => <a>{text}</a>
  },
  {
    title: <TypographyUI typographyType="text" label={'COLUMN.DEPARTMENT'} />,
    dataIndex: 'departmentCode',
    key: 'departmentCode',
    render: (text: DEPARTMENT_CODE) => <TypographyUI typographyType="text" label={departmentCodeConverter(text)} />
  }
];

function Students() {
  const { allStudents, selectedStudent, selectStudent, moveToTrash } = useStudent();

  const [selectedRows, setSelectedRows] = useState<Pick<Student, '_id'>[]>([]);
  const [checkStrictly, setCheckStrictly] = useState(false);
  const [filter, setFilter] = useState<string>('');

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: Pick<Student, '_id'>[], selectedRows: Student[]) => {
      setSelectedRows(selectedRowKeys);
      selectStudent(selectedRows);
    }
  };

  const moveTrash = () => {
    moveToTrash(selectedRows);
  };

  const onValuesChange = (changedValues: { searchStudent: string }) => {
    setFilter(changedValues.searchStudent);
  };

  const filterDatas = (student: Student) => {
    return (
      student.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      student.lastName.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const pickNotTrash = () => {
    const filterData = allStudents.filter((student) => {
      return !student.isTrash && filterDatas(student);
    });
    return filterData;
  };
  return (
    <MainLayout>
      <FormUI onValuesChange={onValuesChange}>
        <InputUI
          prefix={<SearchOutlined />}
          size="large"
          placeholder="Öğrencilerde Eşzamanlı Ara"
          name={'searchStudent'}
        />
      </FormUI>

      <Row>
        {selectedStudent && selectedStudent.length == 1 && <ButtonUI onClick={moveTrash} label="BUTTON_LABEL.DELETE" />}

        {selectedStudent && selectedStudent.length > 1 && (
          <ButtonUI onClick={moveTrash} label="BUTTON_LABEL.DELETE_ALL" />
        )}
      </Row>

      <TableUI
        keyOf={'_id'}
        rowSelection={{ ...rowSelection, checkStrictly }}
        data={pickNotTrash()}
        columns={columns}
      />
    </MainLayout>
  );
}

export default Students;
