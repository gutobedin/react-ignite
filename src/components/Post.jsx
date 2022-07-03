import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar } src="https://github.com/gutobedin.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Bedin</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
            </header>
        </article>
    )
}