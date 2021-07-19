import styles from './styles.module.scss';

export function ShareNews() {
    return (
        <>
            <div className={styles.divContenteTitle}>
                <div className={styles.lineDiv} />
                <span>Compartilhe a novidade</span>
                <div className={styles.lineDiv} />
            </div>

            <div className={styles.divFormFriend}>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

                <form className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        < label htmlFor='name'>Nome do seu amigo</label>
                        < input type='text' name='name' className={styles.inputField} />
                    </div>

                    <div className={styles.formGroup}>
                        < label htmlFor='name'>E-mail</label>
                        < input type='text' name='name' className={styles.inputField} />
                    </div>

                </form>
                <a className={styles.sendButton}>Enviar agora</a>
            </div>
        </>
    )
}