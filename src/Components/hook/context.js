import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

  async function getPostit(title) {
    const response = await fetch(
      `http://localhost:3001/api/v1/postits/${title}`,
      {
        method: 'GET',
      }
    );
    const file = await response.json();
    if (file.success) {
      setTasks([file.data]);
    } else {
      setTasks([]);
    }
  }

  async function deletePostit(id) {
    const response = await fetch(`http://localhost:3001/api/v1/postits/${id}`, {
      method: 'DELETE',
    });
    const file = await response.json();
    if (file.success) {
      toast.success(file.message);
      setChange(!change);
    } else {
      toast.error(file.message);
      setChange(!change);
    }
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
    if (file.success) {
      toast.success(file.message);
      setChange(!change);
    } else toast.error(file.message);
  }

  async function createPostit(body) {
    const response = await fetch(`http://localhost:3001/api/v1/postits`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const file = await response.json();
    if (file.success) {
      toast.success(file.message);
      setChange(!change);
    } else toast.error(file.message);
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
        getPostit,
        updatePostit,
        createPostit,
        getAll,
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
