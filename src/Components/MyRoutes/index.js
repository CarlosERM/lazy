import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyTasks from '../Pages/MyTasks';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyTasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
