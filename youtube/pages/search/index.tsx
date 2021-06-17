import styles from "../../styles/Search.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import Results from "../../components/Results/Results";
import axios from "axios";
const Search = ({ data }) => {
  return (
    <div className={styles.search}>
      <SideBar />
      <Results data={data?.items} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const query = await context.query?.search_query;
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&type=video&maxResults=50&part=snippet&q=${query}`
  );

  return {
    props: {
      data,
    },
  };

  // https://www.googleapis.com/youtube/v3/search?key=AIzaSyB6hlT13melSfOZcvTnkXil-R4m5WvHPP4&type=video&maxResults=50&part=snippet&q=hello
}
