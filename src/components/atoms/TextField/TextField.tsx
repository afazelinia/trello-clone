import styles from './TextField.module.css';

interface TextFieldProps {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextField = ({ value, onChange, placeholder }: TextFieldProps) => (
  <textarea autoFocus className={styles.textarea} placeholder={placeholder} value={value} onChange={onChange} />
);

export default TextField;
