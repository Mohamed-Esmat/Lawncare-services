import styles from './Title.module.css';

const Title = ({ text }) => {
  return (
    <div className={styles['title-container']}>
      <span className={styles['top-left__border']}></span>
      <span className={styles['top-right__border']}></span>
      <span className={styles['bottom-left__border']}></span>
      <span className={styles['bottom-right__border']}></span>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};

export default Title;
