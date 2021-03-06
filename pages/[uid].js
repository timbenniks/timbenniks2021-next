//pages/[uid].js
import { Client } from "../prismic-configuration.js";
import { RichText } from "prismic-reactjs";

const Post = (props) => {
  return (
    <h1 className="text-xl">{RichText.asText(props.doc.data.main_title)}</h1>
  );
};

export async function getStaticProps({ params }) {
  const client = Client();
  const doc = await client.getByUID("home", params.uid);

  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { uid: "home" } }],
    fallback: true,
  };
}

export default Post;
