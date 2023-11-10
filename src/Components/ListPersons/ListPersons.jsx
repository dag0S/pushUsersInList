import Card from '../Card/Card';
import Person from '../Person/Person';
import styles from './ListPersons.module.css';

const ListPersons = ({ persons }) => {
  return (
    <Card className={styles['list-person']}>
      {persons.map(person => (
        <Person key={person.id} name={person.name} age={person.age} />
      ))}
    </Card>
  );
};

export default ListPersons;
