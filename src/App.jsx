import Form from './Components/Form/Form';
import styles from './App.module.css';
import ListPersons from './Components/ListPersons/ListPersons';
import Modal from './Components/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const persons = [
    {
      name: 'John',
      age: 18,
      id: 'n1',
    },
    {
      name: 'Danila',
      age: 19,
      id: 'n2',
    },
  ];

  const [users, setUsers] = useState(persons);

  const addUserDateHandler = inputUserDate => {
    const userDate = {
      ...inputUserDate,
      id: Math.random().toString(),
    };

    setUsers(prevUsers => [userDate, ...prevUsers]);
  };

  const [content, setContent] = useState('');

  const closeModalHandler = () => {
    setContent('');
  };

  const saveErrorMassageHandler = massage => {
    setContent(<Modal desc={massage} onCloseModal={closeModalHandler} />);
  };

  return (
    <div className={styles.wrapper}>
      {content}
      <Form
        onSavaUserDate={addUserDateHandler}
        onErrorMassage={saveErrorMassageHandler}
      />
      <ListPersons persons={users} />
    </div>
  );
};

export default App;
