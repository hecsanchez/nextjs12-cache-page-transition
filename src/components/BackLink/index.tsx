import React from 'react'
import {useRouter} from "next/router";
import styles from './BackLink.module.scss';
export const BackLink = (): JSX.Element => {
    const router = useRouter();
    const goBack = () => {
        router.back();
    }

    return (
        <button className={styles.link} onClick={goBack}>← Back</button>
    )
}
