import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);

  }, []);

  
  const { isLoading, error, sendRequest: fetchTasks } = useHttp({url: 'https://test-165d9-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'}, transformTasks);
  
  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
