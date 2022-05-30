/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { deleteRequest, getRequest, putRequest } from '../../api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [tasks, setTasks] = useState();
  const [change, setChange] = useState();

  useEffect(() => {
    getAll();
  }, [change]);

  const getAll = async () => {
    const response = await getRequest('');
    setTasks(response);
  };

  const deleteOne = async (id) => {
    await deleteRequest(id);
    setChange(!change);
  };

  const updatePost = async (data) => {
    await putRequest(data.id, data);
    setChange(!change);
  };

  return (
    <AuthContext.Provider value={{ tasks, deleteOne, updatePost }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
