import { createContext, useContext, useState } from 'react';
import { useModal } from '../Modal';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [view, toggleModal, type, selectType] = useModal();

  const [tasks] = useState([
    { id: 1, title: 'oi', description: 'oioi', finalData: '2022-05-04' },
    { id: 2, title: 'oi2', description: 'oioi', finalData: '2022-05-04' },
    { id: 3, title: 'oi3', description: 'oioi', finalData: '2022-05-04' },
    { id: 4, title: 'oi4', description: 'oioi', finalData: '2022-05-04' },
    { id: 5, title: 'oi5', description: 'oioi', finalData: '2022-05-04' },
    { id: 6, title: 'oi6', description: 'oioi', finalData: '2022-05-04' },
    { id: 7, title: 'oi7', description: 'oioi', finalData: '2022-05-04' },
    { id: 8, title: 'oi8', description: 'oioi', finalData: '2022-05-04' },
    { id: 9, title: 'oi9', description: 'oioi', finalData: '2022-05-04' },
    { id: 10, title: 'oi10', description: 'oioi', finalData: '2022-05-04' },
  ]);

  return (
    <AuthContext.Provider
      value={{ tasks, view, toggleModal, type, selectType }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
