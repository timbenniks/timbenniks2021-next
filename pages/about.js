import { Client } from "../prismic-configuration.js";
import { RichText } from "prismic-reactjs";

const Post = (props) => {
  return <h1 className="text-xl">{RichText.asText(props.doc.data.title)}</h1>;
};

export async function getStaticProps() {
  const client = Client();
  const doc = await client.getSingle("about");

  return {
    props: {
      doc,
    },
  };
}

export default Post;
