import React, { ReactNode, MouseEventHandler, useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = (event: React.MouseEvent) => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 500);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={`${styles.button} ${isClicked ? styles.clicked : ''}`} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

export default Button;
