import React, { useState } from 'react';
import styles from './Counter.module.css';

export function Counter(){
    const [contador, setContador] = useState(0);
    const aumentar = () => {
        setContador(contador +1);
    }
    const diminuir = () => {
        setContador(contador -1);
    }

    return(
        <div className={styles.contadorContainer}>
            <h1> Contador de cafés: {contador}</h1>
            <div className={styles.botoesContainer}>
            <button onClick={diminuir}>-</button>
            <img src="https://i.imgur.com/dtgVjsX.png"
                className={styles.imagemCafe}
                alt="Cafe"
                />
            <button onClick={aumentar}>+</button>
        </div>
        </div>
    );
}