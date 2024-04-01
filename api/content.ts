import { axios } from "./axios";
import type { Page } from "./content.types";

const ENDPOINT = "/content-page/slug";

export async function getContentPage(slug: string) {
  const { data } = await axios.get<Page>(ENDPOINT.replace("slug", slug));
  return data;
}
