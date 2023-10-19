import styles from './Testimonial.module.css';

const Testimonial = ({ author, text, image, starRating }) => {
  const stars = new Array(starRating).fill(null);
  return (
    <div className={styles.testimonial}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={author} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.author}>{author}</div>
        <p className={styles.text}>{text}</p>
        <div className={styles.stars}>
          {stars.map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.9627 6.20688L11.4996 5.55825L9.50448 1.51352C9.44999 1.40278 9.36034 1.31313 9.2496 1.25864C8.97186 1.12153 8.63436 1.23579 8.4955 1.51352L6.50038 5.55825L2.03729 6.20688C1.91425 6.22446 1.80175 6.28246 1.71561 6.37036C1.61148 6.47738 1.5541 6.62137 1.55608 6.77068C1.55806 6.91999 1.61923 7.06241 1.72616 7.16664L4.95526 10.3149L4.19237 14.7604C4.17448 14.8638 4.18592 14.9702 4.2254 15.0674C4.26488 15.1646 4.33082 15.2489 4.41573 15.3105C4.50065 15.3722 4.60114 15.4089 4.70583 15.4163C4.81051 15.4238 4.91519 15.4018 5.008 15.3528L8.99999 13.2539L12.992 15.3528C13.101 15.4108 13.2275 15.4301 13.3488 15.409C13.6547 15.3563 13.8603 15.0663 13.8076 14.7604L13.0447 10.3149L16.2738 7.16664C16.3617 7.08051 16.4197 6.96801 16.4373 6.84496C16.4848 6.53735 16.2703 6.25258 15.9627 6.20688Z"
                fill="#6D91EE"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
