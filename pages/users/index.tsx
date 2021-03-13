import Link from "next/link";

const index = () => {
  return (
    <div style={{ padding: "20px" }}>
      {users?.map((user, key) => (
        <p key={key}>
          <Link href={`/users/${user.uid}`}>
            <a
              style={{ color: "lightseagreen", cursor: "pointer" }}
            >{`${user.name} ${user.surname}`}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default index;
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
