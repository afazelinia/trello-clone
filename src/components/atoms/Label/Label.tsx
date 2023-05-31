import styles from './Label.module.css';

interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => <div className={styles.label}>{children}</div>;

export default Label;
