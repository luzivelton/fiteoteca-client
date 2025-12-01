import styles from './InputArea.module.scss'

type InputAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
export function InputArea(props: InputAreaProps) {
  return <textarea className={styles.inputArea} {...props} />
}
