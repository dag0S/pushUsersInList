import Card from '../Card/Card';
import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({ onSavaUserDate, onErrorMassage }) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  let errorMassage = '';

  const nameChangeHandler = e => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = e => {
    if (+inputAge > 0) errorMassage = '';

    setInputAge(e.target.value);
  };

  const sendFormHandler = e => {
    e.preventDefault();

    const userDate = {
      name: inputName,
      age: inputAge,
    };

    if (+inputAge < 1) {
      errorMassage = 'Возраст должен быть больше 0';
      onErrorMassage(errorMassage);
      return;
    }

    if (inputName.trim().length === 0) {
      errorMassage = 'Эти поля не могут быть пустыми';
      onErrorMassage(errorMassage);
      return;
    }

    onSavaUserDate(userDate);
    setInputName('');
    setInputAge('');
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={sendFormHandler}>
        <div className={styles.form__row}>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
        </div>
        <div className={styles.form__row}>
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            step="1"
            onChange={ageChangeHandler}
            value={inputAge}
          />
        </div>
        <button type="submit">Добавить пользаветля</button>
      </form>
    </Card>
  );
};

export default Form;
