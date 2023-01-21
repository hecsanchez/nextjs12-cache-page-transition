import {Post} from "@/types/post";
import styles from './PostBrief.module.scss';
import Link from "next/link";

export const PostBrief = ({
    id,
    title,
 }: Partial<Post>): JSX.Element => (
    <div className={styles.container}>
        <Link
            href={`/blog/${id}`}
        >
            <a className={styles.link}>
                <h3>{title}</h3>
                <p className={styles.readMore}>
                    Read more →
                </p>
            </a>
        </Link>
    </div>
)

