import BgImage from "../assets/images/space.jpg";
import SlotsContainer from "../components/SlotsContainer";
import Header from "./Header";

function MainPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <img
        src={BgImage}
        className="absolute object-cover w-full h-full"
        alt=""
      />
      <Header title="Space Race" />
      <SlotsContainer />
    </main>
  );
}

export default MainPage;
