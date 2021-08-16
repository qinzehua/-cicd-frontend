import React, {useMemo, useCallback} from "react";
import {Table} from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render: (text) => (
      <>
        <span>{text === '1' ? '男' : '女'}</span>
      </>
    ),
  },
  {
    title: '操作',
    dataIndex: 'config',
    key: 'config',
    render: (text, record) => (
      <>
        <a onClick={record.onEdit}>编辑</a>
        &nbsp;
        <a onClick={record.onDelete}>删除</a>
      </>
    ),
  }
];

const DataTable = ({onEdit, onDelete, dataSource}) => {
  const handleEdit = useCallback((record) => {
    onEdit && onEdit(record);
  }, [onEdit]);

  const handleDelete = useCallback((record) => {
    onDelete && onDelete(record);
  }, [onDelete]);

  const data = useMemo(() => (
    dataSource.map(item => ({
      ...item,
      onEdit: () => handleEdit(item),
      onDelete: () => handleDelete(item)
    }))
  ), [dataSource, handleDelete, handleEdit]);

  return (
    <Table
      dataSource={data}
      columns={columns}
      bordered
    />
  )
};

export default DataTable;
