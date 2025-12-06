import React from 'react';
import './AppButton.css'; 

const AppButton = ({
  text,
  icon,        
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          Loading...
        </>
      ) : (
        <>
         
          <span className="button-text">{text}</span>
          {icon && <span className="button-icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default AppButton;