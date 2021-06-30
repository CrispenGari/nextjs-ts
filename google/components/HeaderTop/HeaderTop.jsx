import { Avatar, IconButton } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import Link from "next/link";
import styles from "./HeaderTop.module.css";
import { signIn, signOut } from "next-auth/client";
import { useSession } from "next-auth/client";
const HeaderTop = ({ searchResults }) => {
  const [session, loading] = useSession();
  const login = () => {
    signIn()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className={styles.header__top}>
      {!searchResults && (
        <>
          <Link href="#" title={session?.user?.email}>
            Gmail
          </Link>
          <Link href="#">Images</Link>
        </>
      )}
      <IconButton className={styles.header__top__icon__btn}>
        <Apps />
      </IconButton>
      {session ? (
        <Avatar
          src={session?.user?.image}
          alt={session?.user?.name}
          className={styles.header__avatar}
          title={session?.user?.email}
          onClick={() => signOut()}
        />
      ) : (
        <button className={styles.header__button} onClick={login}>
          Sign in
        </button>
      )}
    </div>
  );
};

export default HeaderTop;
