import styles from "./RowA.module.css";
import MovieCardBig from "../../MovieCardBig/MovieCardBig";
const RowA = ({ data }) => {
  return (
    <div className={styles.row__a__rows}>
      <h1>Only on Netflix</h1>
      <div className={styles.row__a__rows__movies}>
        {data?.map((movie, index) => (
          <MovieCardBig movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RowA;
