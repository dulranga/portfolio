import portfolioData from "@constants/portfolio";
import staticPages from "@constants/static-pages";
import { GetServerSideProps } from "next";

const generateBlock = (path: string) => {
  return `<url>
            <loc>https://www.dulranga.ml${path}</loc>
            <lastmod>2022-02-03</lastmod>
          </url>`;
};

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    __CONTENT__
    </urlset>
  `;

  const urls = staticPages.map(generateBlock);
  const portfolioURLs = portfolioData.map((item) =>
    generateBlock(`/portfolio/${item.id}`)
  );

  const allURLs = [urls, portfolioURLs].flat();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap.replace(/__CONTENT__/i, allURLs.join("")));
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
