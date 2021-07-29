import styles from "./Main.module.css";

import MainHeader from "../MainHeader/MainHeader";
import MainNav from "../MainNav/MainNav";
import Email from '../Email/Email'
const Main = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <MainNav />
      {
        Array(5).fill(null).map((_, i)=>  <Email key={i}/>)
      }
    
    </div>
  );
};

export default Main;
