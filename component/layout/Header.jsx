import { styles } from "/";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const Header = ({ displayHeader }) => (
  <div className={styles[displayHeader ? "header" : "headerHidden"]}>
    <Link href="/">
      <Typography component="h1">Real Estate</Typography>
    </Link>
    <nav>
      {["home", "land", "office", "hotel", "factory"].map((target) => (
        <Link href="/" key={target}>
          <a key={target}>{target.toUpperCase()}</a>
        </Link>
      ))}
    </nav>
  </div>
);

export default Header;
