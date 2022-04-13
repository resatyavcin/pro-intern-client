//import react
import React, { useState } from 'react';

//import layout
import MainLayout from '../core/MainLayout';

//import Components
import TableUI from '../components/ui/table/Table';
import ButtonUI from '../components/ui/button/buttonUI';
import TypographyUI from '../components/ui/typography/Typography';

//import Antd
import { Modal, Row } from 'antd';

//import Models
import { Student } from '../common/models/User/Student';

//import Context
import { useStudent } from '../context/StudentContext';

//import Commons
import { DEPARTMENT_CODE } from '../common/constants/departmentCode/departmentCode';
import { departmentCodeConverter } from '../common/utils/departmentCodeConverter';

//import Icons
import { DustBin } from '../assets/icons/Dustbin';

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

function Trash() {
  const { selectedStudent, selectStudent, deleteStudentPermanently, getTrashFilterStudent } = useStudent();

  const [selectedRows, setSelectedRows] = useState<Pick<Student, '_id'>[]>([]);
  const [checkStrictly, setCheckStrictly] = useState(false);

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: Pick<Student, '_id'>[], selectedRows: Student[]) => {
      setSelectedRows(selectedRowKeys);
      selectStudent(selectedRows);
    }
  };

  const permanentlyDelete = () => {
    Modal.error({
      title: 'Kalıcı Sil',
      content: 'Kalıcı olarak silmek istediğinizden emin misiniz?',
      onOk: () => deleteStudentPermanently(selectedRows),
      okCancel: true,
      cancelText: 'Vazgeç'
    });
  };

  const isTrashControl = () => {
    const filterData = selectedStudent?.filter((student) => {
      return student.isTrash;
    });
    if (filterData && filterData?.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <MainLayout>
      <Row>
        {selectedStudent && selectedStudent.length == 1 && isTrashControl() && (
          <ButtonUI onClick={permanentlyDelete} label="BUTTON_LABEL.DELETE_PERMANENTLY" />
        )}

        {selectedStudent && selectedStudent.length > 1 && isTrashControl() && (
          <ButtonUI onClick={permanentlyDelete} label="BUTTON_LABEL.DELETE_ALL_DELETE_PERMANENTLY" />
        )}
      </Row>

      {getTrashFilterStudent() && getTrashFilterStudent().length > 0 ? (
        <TableUI
          keyOf={'_id'}
          rowSelection={{ ...rowSelection, checkStrictly }}
          data={getTrashFilterStudent()}
          columns={columns}
        />
      ) : (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <DustBin />
          <TypographyUI
            style={{ color: '#343644' }}
            level={2}
            label={'PAGES.NO_DATA_IN_DUSTBIN'}
            typographyType={'title'}
          />
        </div>
      )}
    </MainLayout>
  );
}

export default Trash;
