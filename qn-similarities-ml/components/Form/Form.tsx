import React from "react";
import ActivityIndicator from "../Common/ActivityIndicator/ActivityIndicator";
import Button from "../Common/Button/Button";
import Input from "../Common/Input/Input";
import Predictions from "../Predictions/Predictions";
import styles from "./Form.module.css";
import axios from "axios";

interface T {
  classLabel: string;
}

const Form: React.FC<any> = () => {
  const [question1, setQuestion1] = React.useState<string>("");
  const [question2, setQuestion2] = React.useState<string>("");
  const [predictions, setPredictions] = React.useState<T | any>({});
  const [loading, setLoading] = React.useState(false);

  const predict = async (e) => {
    e.preventDefault();
    if (question1 && question2) {
      setLoading(true);
      await axios
        .post("http://127.0.0.1:5000/predict", {
          question1,
          question2,
        })
        .then(({ data }) => setPredictions(data))
        .finally(() => setLoading(false));
    }
    return;
  };

  const clear = () => {
    setQuestion1("");
    setQuestion2("");
    return;
  };
  return (
    <form onSubmit={predict} className={styles.form}>
      {loading && (
        <div className={styles.form__loading}>
          <ActivityIndicator />
        </div>
      )}
      <Input
        value={question1}
        setValue={setQuestion1}
        placeholder="What is your name?"
        label="First Question"
      />
      <Input
        value={question2}
        setValue={setQuestion2}
        placeholder="What do i call you?"
        label="Second Question"
      />
      {predictions ? <Predictions prediction={predictions} /> : null}
      <div className={styles.form__buttons}>
        <Button onClick={predict} title="PREDICT" type="submit" />
        <Button onClick={clear} title="CLEAR" type="button" />
      </div>
    </form>
  );
};

export default Form;
