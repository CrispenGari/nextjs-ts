import { useRouter } from "next/router";

const names = () => {
  const router = useRouter();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(router.query)}</code>
      </pre>
    </div>
  );
};

export default names;
