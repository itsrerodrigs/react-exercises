import React, {useState} from "react";

export function ToggleText() {
    const ToggleText = () => {
        const [isVisible, setIsVisible] = useState(false);

     const toggleText = () => {
        setIsVisible(!isVisible);
     };
     
     return (
        <div>
            <button onClick={toggleText}>
                {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
            </button>
            {isVisible && <p>Este é o texto oculto!</p>}
        
        </div>
     );
    };
}

export default ToggleText;
