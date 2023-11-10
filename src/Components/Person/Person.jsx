import styles from './Person.module.css';

const Person = ({ name, age }) => {
  return (
    <div className={styles.person}>
      <p>{`${name} - ${age}`}</p>
    </div>
  );
};

export default Person;
