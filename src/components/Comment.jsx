import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0); // Atencao: Sempre armazenar essa informacao do estado com um valor do mesmo tipo que sera usado quando o valor for atualizado

    function handleDeleteComment() {
            console.log('DELETAR')

            onDeleteComment(content);
    }


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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
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