import React, { useState } from 'react';
import styles from './Input.module.css';

export function Input({placeholder, value, onChange}) {
    return (
     <input
     type="text"
     placeholder={placeholder}
     value={value}
     onChange={onChange}
     className={styles.inputEstilizado}
     />
    );
}
