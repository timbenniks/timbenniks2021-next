import { Client } from "../../prismic-configuration.js";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import Link from "next/link";

const client = Client();

const Post = (props) => {
  return (
    <>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <h1 className="text-xl">{RichText.asText(props.doc.data.title)}</h1>
      <div>{RichText.render(props.doc.data.content)}</div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const doc = await client.getByUID("writing", params.uid);

  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths() {
  const data = await client.query(
    Prismic.Predicates.at("document.type", "writing"),
    {
      orderings: `[my.writing.publication_date desc]`,
      pageSize: 100,
    }
  );

  const uids = data.results.map((page) => {
    return { params: { uid: page.uid } };
  });

  return {
    paths: uids,
    fallback: false,
  };
}

export default Post;
