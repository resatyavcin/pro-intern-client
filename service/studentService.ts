import axios from 'axios';
import { Student } from '../common/models/User/Student';
import { SERVER_BASE_URL } from './authService';

export const fetchAllStudent = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(SERVER_BASE_URL + '/student/find-all', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    return response.data;
  } catch (err: any) {
    return err.response;
  }
};

export const moveToTrashService = async (selectedUsers: Pick<Student, '_id'>[]) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.delete(SERVER_BASE_URL + '/student/move-trash', {
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: { selectedStudents: selectedUsers }
    });
    return response.data;
  } catch (err: any) {
    return err.response;
  }
};

export const deleteStudentPermanentlyService = async (selectedUsers: Pick<Student, '_id'>[]) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.delete(SERVER_BASE_URL + '/student/delete-permanently', {
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: { selectedStudents: selectedUsers }
    });
    return response.data;
  } catch (err: any) {
    return err.response;
  }
};
