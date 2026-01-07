import Image from "next/image";
import BannerPage from "./Components/DynamicSection/Banner/BannerPage";
import FeaturePage from "./Components/DynamicSection/FeaturedPost/FeaturePage";
import Traveltips from "./Components/DynamicSection/TravelTips/Traveltips";
import Blogsummary from "./Components/DynamicSection/Blogsummary/Blogsummary";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <FeaturePage></FeaturePage>
      <Traveltips></Traveltips>
      <Blogsummary></Blogsummary>
    </div>
  );
}
