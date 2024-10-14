
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import LetsCompare from "./components/LetsCompare";
import KitchenSchedule from "./components/KitchenSchedule";
import SubscribeSection from "./components/Subscribe";
import VideoSlideshow from "./components/VideoSlideShow";
import Tape from "./components/Tape";
import Choose from "./components/Choose";
import Review from "./components/Review";

export default function Home() {
  return (
    
         <>
         <Navbar/>
         <Tape/>
         <VideoSlideshow/>
         <HowItWorks/>
         <Choose/>
         <LetsCompare/>
         <KitchenSchedule/>
         <Review/>
         <SubscribeSection/>
         </>
  );
}
