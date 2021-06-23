import RowA from "./RowA/RowA";
import RowB from "./RowB/RowB";
import RowC from "./RowC/RowC";
import RowD from "./RowD/RowD";
import Questions from "./Questions/Questions";

const Rows = ({ setCreateAccountEmail, setCardToMount }) => {
  return (
    <>
      <RowA />
      <RowB />
      <RowC />
      <RowD />
      <Questions
        setCreateAccountEmail={setCreateAccountEmail}
        setCardToMount={setCardToMount}
      />
    </>
  );
};
export default Rows;
