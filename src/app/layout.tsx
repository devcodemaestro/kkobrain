// index.html 역할

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카카오 브레인 블로그 - 클론코드",
  description: "클론 코드를 통한 프로젝트",
  themeColor: "#181414",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="dc2618b11b331c780132c9c7f87e05b649942f6e"
        />
        <link
          rel="canonical"
          href="https://clone-kkobrain-codemaestro.vercel.app/"
        ></link>

        <meta
          name="google-site-verification"
          content="0tuJ7K50U_mGcEBcf3PKbphkCSUPy2x2wpc5Cf1GK1o"
        />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
