import HomeGradient from "@/../public/home-gradient.svg";
import HomeIntersect from "@/../public/home-intersect.svg";
const HomeGradients = () => {
  return (
    <div className="absolute">
      <HomeGradient className="absolute -z-50" />
      <HomeIntersect className="absolute -z-40" />
    </div>
  );
};

export default HomeGradients;
