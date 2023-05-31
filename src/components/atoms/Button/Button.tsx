import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: 'save' | 'delete' | 'cancel';
}

const Button = ({ children, onClick, type }: ButtonProps) => (
  <button className={`${styles[type]} ${styles.button}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
