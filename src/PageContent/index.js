import React, {useState, useCallback, useEffect} from "react";
import {Layout, Button} from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
import DataTable from "./DataTable";
import AddUserModal from "./AddUserModal";
import {userList, editUser, createUser, deleteUser} from './service';
import './index.css';

const {Content} = Layout;

const PageContent = () => {
  const [dataSource, setDataSource] = useState([]);
  const [record, setRecord] = useState(null);
  const [visible, setVisible] = useState(false);

  const fetchList = useCallback(async () => {
    const {data} = await userList();
    setDataSource(data);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleEdit = useCallback((value) => {
    setRecord(value);
    setVisible(true);
  }, []);

  const handleClick = useCallback(() => {
    setRecord(null);
    setVisible(true);
  }, []);

  const handleSubmit = useCallback(async (value) => {
    if (value.id) {
      await editUser(value);
    } else {
      await createUser(value);
    }
    fetchList();
    setRecord(null);
    setVisible(false);
  }, [fetchList]);

  const handleClose = useCallback(() => {
    setRecord(null);
    setVisible(false);
  }, []);

  const handleDelete = useCallback(async ({id}) => {
    const result = await deleteUser({id});
    if (result.success) {
      fetchList();
    }
  }, [fetchList]);

  return (
    <Content className="site-layout-background">
      <AddUserModal
        record={record}
        visible={visible}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
      <Button
        type="primary"
        icon={<PlusOutlined/>}
        onClick={handleClick}
      >
        新增用户(新版本2)
      </Button>
      <DataTable
        style={{marginTop: '10px'}}
        dataSource={dataSource}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Content>
  )
};

export default PageContent
