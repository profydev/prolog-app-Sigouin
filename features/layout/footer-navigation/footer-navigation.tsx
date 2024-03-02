import styles from "./footer-navigation.module.scss";
import Link from "next/link";

export function FooterNavigation() {
  const version = process.env.NEXT_PUBLIC_REACT_APP_VERSION;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.version}>Version: {version}</div>
          <div className={styles.footerLinks}>
            <Link href="#">Docs</Link>
            <Link href="#">API</Link>
            <Link href="#">Help</Link>
            <Link href="#">Community</Link>
          </div>
          <div className={styles.logoContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo-small.svg"
              alt="logo"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
