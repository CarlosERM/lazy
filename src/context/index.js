import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const myContext = React.createContext({});

export const ContextProvider = ({ children }) => {
  const tasks = useMemo(
    () => ({
      tasks: [
        {
          title: 'Fazer Tarefa',
          description: 'Fazer lista de quimica quantica',
          finalData: '2022-05-23',
          _links: {
            self: { href: 'http://localhost:8080/tarefas/1' },
            tarefas: { href: 'http://localhost:8080/tarefas' },
          },
        },
        {
          title: 'Matar alguém',
          description: 'Comprar uma faca',
          finalData: '2022-05-21',
          _links: {
            self: { href: 'http://localhost:8080/tarefas/1' },
            tarefas: { href: 'http://localhost:8080/tarefas' },
          },
        },
        {
          title: 'Beijar minha namorada',
          description: 'Arranjar uma namorada',
          finalData: '2022-05-22',
          _links: {
            self: { href: 'http://localhost:8080/tarefas/1' },
            tarefas: { href: 'http://localhost:8080/tarefas' },
          },
        },
        {
          title: 'Arranjar problema',
          description: 'Comer um carangueijo',
          finalData: '2022-05-19',
          _links: {
            self: { href: 'http://localhost:8080/tarefas/1' },
            tarefas: { href: 'http://localhost:8080/tarefas' },
          },
        },
      ],
    }),
    []
  );

  return <myContext.Provider value={tasks}>{children}</myContext.Provider>;
};

export function useMyContext() {
  const context = React.useContext(myContext);

  if (!context) {
    throw new Error('useUtils must be used within an UserProvider');
  }

  return context;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
