import styles from "../styles/Home.module.css";

import React from "react";
import { NextPage } from "next";
import {
  useGetFilesQuery,
  useUploadFileMutation,
} from "../src/generated/graphql";
const Home: NextPage = ({}) => {
  const [result, reexecuteQuery] = useGetFilesQuery();

  const [_, upload] = useUploadFileMutation();

  const [image, setImage] = React.useState<any>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage({
      valid: e.target.validity.valid,
      image: (e.target as any)?.files[0],
    });
  };
  const postImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image?.valid) {
      await upload({
        picture: image.image,
      });
      await reexecuteQuery({ requestPolicy: "network-only" });
    } else {
      return;
    }
    setImage(undefined);
  };

  return (
    <div className={styles.app}>
      <form onSubmit={postImage}>
        <input
          type="file"
          accept="images/*"
          multiple={false}
          onChange={handleChange}
        />
        {image ? (
          <button type="submit">UPLOAD</button>
        ) : (
          <p>Select an image to upload first.</p>
        )}
      </form>
      <h1>Images on the server</h1>
      <div className={styles.app__images}>
        {(result?.data as any)?.getFiles?.map((url: any) => (
          <img src={url} key={url} alt="/" />
        ))}
      </div>
    </div>
  );
};

export default Home;
