import Input from '../Input';
import Task from '../Task';
import './style.css';

const TaskContainer = () => {
  return (
    <div className="task-container">
      <Input />
      <ul className="task-grid">
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
        <Task
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque."
          date="11/05/2022"
        />
      </ul>
    </div>
  );
};

export default TaskContainer;
