import { Modal, Header } from "@features/ui";
import { Page } from "@api/content.types";
import { getContentPage } from "@api/content";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

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
    <div>
      <Header />
      <Modal />
    </div>
  );
};

export default HomePage;
