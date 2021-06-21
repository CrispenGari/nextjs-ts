import styles from "./RowA.module.css";
import MovieCardBig from "../../MovieCardBig/MovieCardBig";
const RowA = () => {
  return (
    <div className={styles.row__a__rows}>
      <h1>Only on Netflix</h1>
      <div className={styles.row__a__rows__movies}>
        <MovieCardBig />
        <MovieCardBig />
        <MovieCardBig />
        <MovieCardBig />
        <MovieCardBig />
        <MovieCardBig />
        <MovieCardBig />
      </div>
    </div>
  );
};

export default RowA;
