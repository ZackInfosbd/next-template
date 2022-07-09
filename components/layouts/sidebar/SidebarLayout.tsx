import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface SidebarLayoutI {}

const SidebarLayout: React.FC<SidebarLayoutI> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
