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

                <time title='03 de julho às 16:14h' dateTime="2022-03/07 16:14:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               <p>Fala galeraa 👋</p> 
               <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
               <p> <a href=""> 👉 jane.design/doctorcare </a> </p>
               <p> <a href=""> #novoprojeto #nlw #rocketseat </a> </p>
            </div>
        </article>
    )
}