import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import { Modal } from "@features/ui";

const navigationLinks = [
  { text: "Home", link: Routes.home },
  { text: "Products", link: Routes.products },
  { text: "Documentation", link: Routes.documentation },
  { text: "Pricing", link: Routes.pricing },
];

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />

        <nav className={styles.navLinks}>
          <ul>
            {navigationLinks.map((item) => {
              return (
                <li key={item.text}>
                  <a href={item.link}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href={Routes.projects} className={styles.dashboardLink}>
          Open Dashboard
        </a>
      </header>
      <Modal />
    </div>
  );
};

export default IssuesPage;
