import React from "react";

const Confirmation = ({ children, onClose }) => {
    const styles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        modal: {
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          position: 'relative',
          width: '80%',
          maxWidth: '500px'
        },
        closeButton: {
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer'
        }
      };
      
      return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          {children}
          <button style={styles.closeButton} onClick={onClose}>X</button>
        </div>
    </div>
)};

export default Confirmation;