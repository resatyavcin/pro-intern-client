//import react
import React, { Fragment, useState } from 'react';
import { Row } from 'antd';

//import layout
import MainLayout from '../core/MainLayout';

//import Context
import { useStudent } from '../context/StudentContext';

//import Models
import { Student } from '../common/models/User/Student';

//import Components
import TableUI from '../components/ui/table/Table';
import ButtonUI from '../components/ui/button/buttonUI';
import TypographyUI from '../components/ui/typography/Typography';
import CardUI from '../components/ui/card/cardUI';

//import Commons
import { DEPARTMENT_CODE } from '../common/constants/departmentCode/departmentCode';

//import Utils
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';
import { NoResult } from '../assets/icons/NoResult';
import { departmentCodeConverter } from '../common/utils/departmentCodeConverter';

const columns = [
  {
    title: <TypographyUI typographytype="text" label={'COLUMN.FIRST_NAME'} />,
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text: any) => <a>{text}</a>
  },
  {
    title: <TypographyUI typographytype="text" label={'COLUMN.LAST_NAME'} />,
    dataIndex: 'lastName',
    key: 'lastName',
    render: (text: any) => <a>{text}</a>
  },
  {
    title: <TypographyUI typographytype="text" label={'COLUMN.DEPARTMENT'} />,
    dataIndex: 'departmentCode',
    key: 'departmentCode',
    render: (text: DEPARTMENT_CODE) => <TypographyUI typographytype="text" label={departmentCodeConverter(text)} />
  }
];

function Students() {
  const { activeFilter, selectedStudent, selectStudent, filterText, moveToTrash, getFilterAllStudent } = useStudent();

  const [selectedRows, setSelectedRows] = useState<Pick<Student, '_id'>[]>([]);
  const [checkStrictly, setCheckStrictly] = useState(false);

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

  return (
    <MainLayout>
      {activeFilter && getFilterAllStudent().length > 0 && filterText ? (
        <Fragment>
          <Row>
            {selectedStudent && selectedStudent.length == 1 && (
              <ButtonUI onClick={moveTrash} label="BUTTON_LABEL.DELETE" />
            )}
            {selectedStudent && selectedStudent.length > 1 && (
              <ButtonUI onClick={moveTrash} label="BUTTON_LABEL.DELETE_ALL" />
            )}
          </Row>
          <TableUI
            keyOf={'_id'}
            rowSelection={{ ...rowSelection, checkStrictly }}
            data={getFilterAllStudent()}
            columns={columns}
          />
        </Fragment>
      ) : null}

      {activeFilter && getFilterAllStudent().length == 0 && filterText && (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <NoResult />
          <TypographyUI
            style={{ color: '#343644' }}
            level={2}
            label={'PAGES.NO_DATA_IN_SEARCH'}
            typographytype={'title'}
          />
        </div>
      )}

      {!activeFilter ? (
        <Fragment>
          <Row>
            {selectedStudent && selectedStudent.length == 1 && (
              <ButtonUI onClick={moveTrash} label="BUTTON_LABEL.DELETE" />
            )}
            {selectedStudent && selectedStudent.length > 1 && (
              <ButtonUI onClick={moveTrash} label="BUTTON_LABEL.DELETE_ALL" />
            )}
          </Row>
          <CardUI cardType={'normal'}>
            <TableUI
              keyOf={'_id'}
              rowSelection={{ ...rowSelection, checkStrictly }}
              data={getFilterAllStudent()}
              columns={columns}
            />
          </CardUI>
        </Fragment>
      ) : null}
    </MainLayout>
  );
}

export default Students;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.STUDENTS }
  };
}
