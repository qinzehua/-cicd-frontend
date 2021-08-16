import {request} from '../utils/request';

const API_URL = {
  list: '/user/list',
  edit: '/user/edit/:id',
  add: '/user/create',
  delete: '/user/delete/:id'
};

export const userList = (params) => request(API_URL.list,'GET', params);

export const editUser = (params) =>
  request(API_URL.edit.replace(':id', params.id),'PUT', params);

export const createUser = (params) =>
  request(API_URL.add,'POST', params);

export const deleteUser = (params) =>
  request(API_URL.delete.replace(':id', params.id),'DELETE', params);
