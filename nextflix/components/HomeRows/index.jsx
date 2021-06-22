import RowA from "./RowA/RowA";
import RowB from "./RowB/RowB";
const Index = ({ data, home_rows_data }) => {
  return (
    <>
      <RowA data={data} />
      {home_rows_data?.map(({ data, title }, index) => (
        <RowB key={index} movies={data} title={title} />
      ))}
    </>
  );
};

export default Index;
