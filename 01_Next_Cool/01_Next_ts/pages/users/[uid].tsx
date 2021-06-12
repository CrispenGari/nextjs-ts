import { useRouter } from "next/router";
import Link from "next/link";
const user = () => {
  const router = useRouter();
  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            users?.filter(
              (user) => user?.uid === Number.parseInt(router?.query.uid)
            )[0]
          )}
        </code>
      </pre>
      <Link href="/users">
        <button>All users</button>
      </Link>
    </div>
  );
};

export default user;

interface User {
  uid: number;
  name: string;
  surname: string;
  age: number;
  single?: boolean;
}

const users: User[] = [
  { name: "Jonh", surname: "Doe", age: 25, uid: 1, single: true },
  { name: "Marry", surname: "Doe", age: 25, uid: 2, single: true },
  { name: "Garry", surname: "Doe", age: 25, uid: 3, single: false },
  { name: "Simpson", surname: "Doe", age: 25, uid: 4, single: false },
  { name: "Grade", surname: "Doe", age: 25, uid: 5, single: true },
];
