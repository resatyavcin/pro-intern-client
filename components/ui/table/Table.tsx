import React from 'react';

import { Table } from 'antd';

interface ITableProps {
  keyOf: string;
  rowSelection: Object;
  data: Array<Object>;
  columns: Array<Object>;
}

function TableUI(props: ITableProps) {
  const { keyOf, rowSelection, data, columns } = props;

  return <Table rowKey={keyOf} rowSelection={rowSelection} dataSource={data} columns={columns}></Table>;
}

export default TableUI;
