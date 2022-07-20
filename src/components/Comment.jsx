import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gutobedin.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Bedin</strong>
                            <time title='03 de julho às 16:14h' dateTime="2022-03/07 16:14:00">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentários'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}