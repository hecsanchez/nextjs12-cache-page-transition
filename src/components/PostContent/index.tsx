import styles from './PostContent.module.scss';

export const PostContent = ({ children }) => {
    return (
        <p className={styles.content}>{children}</p>
    )
}
