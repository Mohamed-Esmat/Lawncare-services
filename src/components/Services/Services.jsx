import Title from '../UI/Title';
import ServiceCard from './ServiceCard';
import Service1Img from '../../assets/service1.png';
import Service2Img from '../../assets/service2.png';
import Service3Img from '../../assets/service3.jpg';
import styles from './Services.module.css';
import CallToActionButton from '../UI/CallToActionButton';

const Services = () => {
  return (
    <section className={styles.services}>
      <Title text="Services" />
      <div className={`${styles.cardContainer} ${styles.container}`}>
        <ServiceCard
          image={Service1Img}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        />
        <ServiceCard
          image={Service2Img}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        />
        <ServiceCard
          image={Service3Img}
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        />
      </div>
      {/* <button className={styles.button}>Help Me</button> */}
      <span className={styles['button-container']}>
        <CallToActionButton
          label="Help Me"
          backgroundColor="#5180f6"
          textColor="#fff"
        />
      </span>
    </section>
  );
};

export default Services;
