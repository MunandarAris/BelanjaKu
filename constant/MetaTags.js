// plugins
import { NextSeo } from "next-seo";

const MetaTags = ({ title, description }) => {
  return <NextSeo title={`BelanjaKu - ${title}`} description={description} />;
};

// default props jika tidak di set oleh user
MetaTags.defaultProps = {
  title: "Home",
  description:
    "Sebuah toko online yang menyediakan berbagai kebutuhan sehari - hari seperti pakaian, pakain pria, pakaian wanita, peralatan masak, elektronik dan masih banyak lagi",
};

export default MetaTags;
