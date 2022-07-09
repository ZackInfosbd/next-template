import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Untill primary layout example</title>
      </Head>

      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
