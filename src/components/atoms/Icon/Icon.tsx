import styles from './Icon.module.css';

interface IconProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Icon = ({ children, onClick }: IconProps) => (
  <div className={styles.icon} onClick={onClick}>
    {children}️
  </div>
);

export default Icon;
