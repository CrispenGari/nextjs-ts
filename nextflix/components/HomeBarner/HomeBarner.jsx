import styles from "./HomeBarner.module.css";
import { ImPlay3 } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
const HomeBarner = () => {
  return (
    <div className={styles.home__barner}>
      <div className={styles.home__barner__movie}>
        <h4>Movie Name</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere
          natus velit debitis autem explicabo magnam assumenda odit aliquam ea
          veritatis voluptatem nobis in, sapiente eius quisquam molestias
          tenetur. Repudiandae!
        </p>
        <div className={styles.home__barner__buttons}>
          <button>
            <ImPlay3 className={styles.home__button__icon} />
            Play
          </button>
          <button>
            <AiOutlineInfoCircle className={styles.home__button__icon} />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBarner;
