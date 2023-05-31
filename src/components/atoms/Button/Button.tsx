import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;