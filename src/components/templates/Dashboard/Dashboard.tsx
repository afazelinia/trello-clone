import styles from './Dashboard.module.css';
import { Board, Label } from '../../../components';

const Dashboard = () => {
  return (
    <div className={styles.App}>
      <Label>Trello Clone</Label>
      <Board />
    </div>
  );
};

export default Dashboard;
