import AboutImage from '../../assets/Rectangle263.png';
import CallToActionButton from '../UI/CallToActionButton';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about__container']}>
        <div className={styles['clipped-vector']}></div>
        <div
          className={`${styles['about__container-content']} ${styles['container']}`}
        >
          <div className={styles.left}>
            <h2 className={styles.title}>About Us</h2>
            <p className={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <img src={AboutImage} alt="About Us" className={styles.image} />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Where</h2>
            <p className={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <span className={styles['button-container']}>
          <CallToActionButton
            label="Help Me"
            backgroundColor="#eec04b"
            textColor="#515151"
          />
        </span>
      </div>
    </section>
  );
};

export default About;
