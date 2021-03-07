import Head from "next/head";
import React from "react";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
import Link from "next/link";
import Layout from "../layouts";

export default function Home({ doc: { data } }) {
  return (
    <Layout>
      <Head>
        <title>{RichText.asText(data.body[0].primary.title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="bg-gray-100 rounded-xl p-8">
          {RichText.asText(data.main_title)}
        </h1>

        <ul>
          <li>
            <Link href="/writings/i-was-interviewed-by-zeplin">
              <a>i-was-interviewed-by-zeplin</a>
            </Link>
          </li>
          <li>
            <Link href="/writings/i-was-interviewed-by-zeplin">
              <a>i-turned-my-career-on-its-head</a>
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = Client();
  const doc = await client.getSingle("home");

  return {
    props: {
      doc,
    },
  };
}
