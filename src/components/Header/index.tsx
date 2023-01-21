import { useRouter } from 'next/router'
import styles from './Header.module.scss';
import Link from "next/link";

export const Header = (): JSX.Element => {

    return(
        <header className={styles.header}>
            <Link href='/' scroll={false}>
                <span className={styles.site}>Dummy NextJS</span>
            </Link>
        </header>
    )
}
