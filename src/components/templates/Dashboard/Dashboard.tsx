import styles from './Dashboard.module.css';
import { Board, BoardProvider, Label } from '../../../components';

const Dashboard = () => {
  return (
    <div className={styles.App}>
      <Label>Trello Clone</Label>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
};

export default Dashboard;
