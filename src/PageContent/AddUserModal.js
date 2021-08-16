import React, {useMemo, useEffect} from 'react';
import {Modal, Form, Input, Select} from 'antd';

const {Option} = Select;
const AddUserModal = ({visible, onSubmit, onClose, record}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (record) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
  }, [form, record]);

  const title = useMemo(() => {
    return record?.id ? '编辑用户' : '新增用户';
  }, [record]);

  const handleOk = () => {
    form.validateFields().then(() => {
      onSubmit && onSubmit(form.getFieldsValue());
    })
  };

  const handleCancel = () => {
    onClose && onClose();
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        form={form}
      >
        <Form.Item
          label="id"
          name="id"
          hidden
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="姓名"
          name="name"
          rules={[{required: true, message: '请输入你的姓名'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="年龄"
          name="age"
          rules={[{required: true, message: '请输入年龄'}]}
        >
          <Input type="number"/>
        </Form.Item>
        <Form.Item
          label="性别"
          name="sex"
          rules={[{required: true, message: '请选择性别'}]}
        >
          <Select>
            <Option value="1">男</Option>
            <Option value="2">女</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default AddUserModal;
