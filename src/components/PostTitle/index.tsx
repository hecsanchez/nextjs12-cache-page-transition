import styles from './PostTitle.module.scss';

export const PostTitle = ({ children }) => {
    return (
        <h1 className={styles.title}>{children}</h1>
    )
}
