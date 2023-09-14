import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ko">
      <Head />
      <body className="text-primary bg-primary transition-[background]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
