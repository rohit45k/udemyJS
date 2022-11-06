import useFetch from '../../hooks/use-fetch';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading, error, sendRequest} = useFetch();

  const dataProcessor = (taskText, data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    sendRequest({
      url: 'https://react-custom-hooks-9591b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      method: 'POST',
      body: {text: taskText}
    }, dataProcessor.bind(null, taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
