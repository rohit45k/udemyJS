import React, { useEffect, useState } from 'react';
import useFetch from './hooks/use-fetch';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {

  const [tasks, setTasks] = useState([]);
  const dataProcessor = (data) => {
    const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
  }

  const {isLoading, error, sendRequest} = useFetch();

  useEffect(() => {
    sendRequest({
      url: 'https://react-custom-hooks-9591b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
    }, dataProcessor);
  }, [sendRequest]);

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
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
