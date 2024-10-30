import styles from './Navbar.module.css'

export function Navbar(){
    return (
        <>
        <header className={styles.header}>
            <div className={styles.imagemContainer}> 
                <img
                src="https://i.imgur.com/Mk4QbeC.png"
                className={styles.imagemLogo}
                alt="Logo" />
            </div>
            <div className={styles.navList}>
                <ul>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>Entrar</li>
                </ul>

            </div>
         </header>      
        </>
    )
}

