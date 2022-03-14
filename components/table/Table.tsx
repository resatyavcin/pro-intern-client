import React, { useState } from 'react';

import { Avatar, Col, Row, Table } from 'antd';

//import Components
import ButtonUI from '../ui/button/buttonUI';
import TypographyUI from '../typography/Typography';

//imports Commons
import { DEPARTMENT_CODE } from '../../common/constants/departmentCode/departmentCode';

//import Utils
import { departmentCodeConverter } from '../../common/utils/departmentCodeConverter';
import { useStudent } from '../../context/StudentContext';

interface ITableProps {
  users?: Array<Object>;
}

function TableUI(props: ITableProps) {
  const { users } = props;

  const { selectStudent, setSelectStudent } = useStudent();
  const [markStudent, setmarkStudent] = useState();
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [previewButtonVisibility, setpreviewButtonVisibility] = useState(false);

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
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedAvatar(selectedRows);
      if (selectedRows.length === 1) {
        setpreviewButtonVisibility(true);
        setmarkStudent(selectedRows[selectedRows.length - 1]);
        return '';
      }
      setpreviewButtonVisibility(false);
    }
    // onSelect: (record, selected, selectedRows) => {
    //   console.log(record, selected, selectedRows);
    // },
    // onSelectAll: (selected, selectedRows, changeRows) => {
    //   console.log(selected, selectedRows, changeRows);
    // }
  };

  return (
    <>
      <Row>
        <Col xs={4}>
          <ButtonUI label="BUTTON_LABEL.EXPORTS" />
        </Col>
        <Col xs={12}>
          {previewButtonVisibility ? (
            <ButtonUI onClick={() => setSelectStudent(markStudent)} label="BUTTON_LABEL.PREVIEW" />
          ) : null}
        </Col>
        <Col>
          <TypographyUI typographyType="text" strong label={'Seçilen:'} />
          {selectedAvatar ? (
            <Avatar.Group maxCount={4}>
              {selectedAvatar?.map((avatar, i) => (
                <Avatar key={i} style={{ backgroundColor: 'orange' }}>
                  {avatar?.first_name.charAt(0).toUpperCase()}
                  {avatar?.last_name.charAt(0).toUpperCase()}
                </Avatar>
              ))}
            </Avatar.Group>
          ) : null}
        </Col>
      </Row>

      <Table rowKey="id" rowSelection={{ ...rowSelection, checkStrictly }} columns={columns} dataSource={users} />
    </>
  );
}

export default TableUI;
