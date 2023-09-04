import { getDataBase, getNotionPage, getPost } from "@/apis/notion";
import Comments from "@/components/Comments";
import BaseLayout from "@/components/Layouts/BaseLayout";
import SubLayout from "@/components/Layouts/SubLayout";
import { isFullPage } from "@notionhq/client";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import { ExtendedRecordMap } from "notion-types";
import useDarkMode from "@/hooks/useDarkMode";
import useMounted from "@/hooks/useMounted";
import Link from "next/link";
import Image from "next/image";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(m => m.Code),
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(m => m.Collection),
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then(m => m.Equation),
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then(m => m.Pdf),
  {
    ssr: false,
  },
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then(m => m.Modal),
  {
    ssr: false,
  },
);

interface PostProps {
  post: GetPageResponse;
  recordMap: ExtendedRecordMap;
}

export const getStaticPaths = async () => {
  const { results } = await getDataBase();

  return {
    paths: results.map(post => {
      if ("properties" in post) {
        if ("title" in post.properties.Slug) {
          return {
            params: {
              slug: post.properties.Slug.title[0].plain_text,
            },
          };
        }
      }
    }),
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params && context.params.slug;
  const { results } = await getDataBase();
  const { id } = results.filter(post => {
    if (!isFullPage(post)) return;
    if ("title" in post.properties.Slug) {
      return post.properties.Slug.title[0].plain_text === slug;
    }
  })[0];

  const [post, recordMap] = await Promise.all([getPost(id), getNotionPage(id)]);

  return {
    props: {
      post,
      recordMap,
    },
  };
}

const Post = ({ post, recordMap }: PostProps) => {
  const { mounted } = useMounted();
  const { resolvedTheme } = useDarkMode();
  const theme = resolvedTheme === "dark" ? true : false;

  const title =
    isFullPage(post) &&
    "rich_text" in post.properties.Title &&
    post.properties.Title.rich_text[0].plain_text;
  const repo = process.env.COMMENTS_REPO;
  const repoId = process.env.COMMENTS_REPO_ID;
  const category = process.env.COMMENTS_CATEGORY;
  const categoryId = process.env.COMMENTS_CATEGORY_ID;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!mounted ? null : (
        <NotionRenderer
          recordMap={recordMap}
          darkMode={theme}
          components={{
            Code,
            Collection,
            Equation,
            Modal,
            Pdf,
            nextImage: Image,
            nextLink: Link,
          }}
        />
      )}
      {repo && repoId && category && categoryId && (
        <Comments
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
        />
      )}
    </>
  );
};

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <SubLayout>{page}</SubLayout>
    </BaseLayout>
  );
};

export default Post;
