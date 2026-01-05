import Image from "next/image";
import BannerPage from "./Components/DynamicSection/Banner/BannerPage";
import FeaturePage from "./Components/DynamicSection/FeaturedPost/FeaturePage";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <FeaturePage></FeaturePage>
    </div>
  );
}
