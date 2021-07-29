import React from "react";
import ActivityIndicator from "../Common/ActivityIndicator/ActivityIndicator";
import Button from "../Common/Button/Button";
import Input from "../Common/Input/Input";
import Predictions from "../Predictions/Predictions";
import styles from "./Form.module.css";

const Form: React.FC<any> = () => {
  const [question1, setQuestion1] = React.useState<string>("");
  const [question2, setQuestion2] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);

  const predict = () => {};

  const clear = () => {};
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
      <Predictions
        prediction={{
          className: "duplicate/similar",
          probability: 98,
          classLabel: 1,
        }}
      />
      <div className={styles.form__buttons}>
        <Button onClick={predict} title="PREDICT" type="submit" />
        <Button onClick={clear} title="CLEAR" type="button" />
      </div>
    </form>
  );
};

export default Form;
