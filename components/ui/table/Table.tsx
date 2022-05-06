import React from 'react';

import { Table } from 'antd';

interface ITableProps {
  style?: React.CSSProperties;
  keyOf: string;
  rowSelection: Object;
  data: Array<Object>;
  columns: Array<Object>;
}

function TableUI(props: ITableProps) {
  const { keyOf, rowSelection, data, columns, style } = props;

  return <Table style={style} rowKey={keyOf} rowSelection={rowSelection} dataSource={data} columns={columns}></Table>;
}

export default TableUI;
