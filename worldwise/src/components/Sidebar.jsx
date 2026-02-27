import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <Logo />
        <AppNav />
      </div>

      <Outlet />
      <footer className={styles.footer}>
        &copy;Copyright {new Date().getFullYear()}. WorldWise inc.
      </footer>
    </aside>
  );
}

export default Sidebar;
