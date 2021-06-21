import styles from "./RowB.module.css";
import MovieCardSmall from "../../MovieCardSmall/MovieCardSmall";
const RowB = () => {
  return (
    <div className={styles.row__b__rows}>
      <h1>Suggestions</h1>
      <div className={styles.row__b__rows__movies}>
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
        <MovieCardSmall />
      </div>
    </div>
  );
};

export default RowB;
