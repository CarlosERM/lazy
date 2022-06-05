import { createContext, useContext, useEffect, useState } from 'react';
// import { getRequest } from '../../api';
// import { getRequest } from '../../api';
import { useModal } from '../Modal';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [view, toggleModal, type, selectType, selected, selectValues] =
    useModal();
  const [tasks, setTasks] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getAll();
  }, [change]);

  async function getAll() {
    const response = await fetch('http://localhost:3001/api/v1/postits');
    const file = await response.json();
    if (file.success) setTasks(file.data);
  }

  async function deletePostit(id) {
    const response = await fetch(`http://localhost:3001/api/v1/postits/${id}`, {
      method: 'DELETE',
    });
    const file = await response.json();
    if (file.success) setChange(!change);
  }

  async function updatePostit(id, body) {
    const response = await fetch(`http://localhost:3001/api/v1/postits/${id}`, {
      body: JSON.stringify(body),
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const file = await response.json();
    console.log(JSON.stringify(body));
    if (file.success) setChange(!change);
  }

  return (
    <AuthContext.Provider
      value={{
        tasks,
        view,
        toggleModal,
        type,
        selectType,
        deletePostit,
        selected,
        selectValues,
        updatePostit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
