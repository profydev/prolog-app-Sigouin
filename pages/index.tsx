import { Modal, Header } from "@features/ui";
import { Page, SectionType } from "@api/content.types";
import { getContentPage } from "@api/content";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";

type PageProps = {
  page: Page;
};

export const getStaticProps = (async () => {
  const page = await getContentPage("home");
  return { props: { page } };
}) satisfies GetStaticProps<PageProps>;

const HomePage = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(page);
  return (
    <>
      <Head>
        <title>{page.meta.title}</title>
        <meta name="description" content={page.meta.description} />
        <meta property="og:title" content={page.meta.title} />
        <meta property="og:description" content={page.meta.description} />
        <meta property="og:image" content={page.meta.image} />
      </Head>
      <Header />
      <Modal />
      {page.sections.map((section, index) => {
        switch (section.sectionType) {
          case SectionType.Hero:
            return (
              <section className={styles.section} key={index}>
                <h1 className={styles.title}>{section.title}</h1>
                <p className={styles.subtitle}>{section.subtitle}</p>
                <Image
                  src={section.image.src}
                  alt="Hero"
                  width={section.image.width}
                  height={section.image.height}
                  priority
                  className={styles.image}
                />
              </section>
            );
        }
      })}
    </>
  );
};

export default HomePage;
