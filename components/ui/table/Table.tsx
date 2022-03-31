import React, { useState } from 'react';

import { Col, Row, Table } from 'antd';

//import Components
import ButtonUI from '../button/buttonUI';
import TypographyUI from '../typography/Typography';

//imports Commons
import { DEPARTMENT_CODE } from '../../../common/constants/departmentCode/departmentCode';

//import Utils
import { departmentCodeConverter } from '../../../common/utils/departmentCodeConverter';
import { useStudent } from '../../../context/StudentContext';

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

interface ITableProps {
  users?: IUser[];
}

function TableUI(props: ITableProps) {
  //const { users } = props;

  const { allStudents, selectUser } = useStudent();

  const [checkStrictly, setCheckStrictly] = React.useState(false);

  const columns = [
    {
      title: <TypographyUI typographyType="text" label={'COLUMN.FIRST_NAME'} />,
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text: any) => <a>{text}</a>
    },
    {
      title: <TypographyUI typographyType="text" label={'COLUMN.LAST_NAME'} />,
      dataIndex: 'last_name',
      key: 'last_name',
      render: (text: any) => <a>{text}</a>
    },
    {
      title: <TypographyUI typographyType="text" label={'COLUMN.DEPARTMENT'} />,
      dataIndex: 'department_code',
      key: 'department_code',
      render: (text: DEPARTMENT_CODE) => <TypographyUI typographyType="text" label={departmentCodeConverter(text)} />
    }
  ];

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: string[], selectedRows: IUser[]) => {
      selectUser(selectedRows);
    }
  };

  return (
    <>
      <Row>
        <Col xs={3}>
          <ButtonUI label="BUTTON_LABEL.EXPORTS" />
        </Col>
        <Col xs={4}>
          <ButtonUI label="BUTTON_LABEL.EXPORTS" />
        </Col>
        <Col xs={12}>
          <ButtonUI label="BUTTON_LABEL.EXPORTS" />
        </Col>
        <Col></Col>
      </Row>

      <Table rowKey="id" rowSelection={{ ...rowSelection, checkStrictly }} columns={columns} dataSource={allStudents} />
    </>
  );
}

export default TableUI;
