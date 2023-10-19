import styles from './CallToActionButton.module.css';

const CallToActionButton = ({ label, backgroundColor, textColor }) => {
  const buttonStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {label}
    </button>
  );
};

export default CallToActionButton;