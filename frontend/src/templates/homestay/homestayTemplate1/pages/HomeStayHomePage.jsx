import React, { Suspense, lazy } from "react";
import Header from "../componenst/Header";
import PlacesOfInterest from "../componenst/PlacesOfInterest";

// Lazy components
const HeroSection = lazy(() => import("../componenst/HeroSection"));
const WelcomeSection = lazy(
  () => import("../componenst/homepage/WelcomeSection"),
);
const FeaturedFacilities = lazy(
  () => import("../componenst/homepage/FeatureCard"),
);
const TestimonialSlider = lazy(
  () => import("../componenst/homepage/TestimonialSlider"),
);
const AccommodationSection = lazy(() => import("./H/RoomCard"));

const HomeStayHomePage = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <HeroSection
          logoText="Ami Homestay"
          introText="INTRODUCING"
          headingLines={["AN ELEGANT", "HOMESTAY & LODGE", "WORDPRESS THEME"]}
          buttonText="VIEW DEMO"
          backgroundImages={[
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/596037833.jpg?k=fa7f88c044a2d098b23d5f0ed268bedf1053e328e7ed5348a33b434b1133d638&o=",
            "https://assets.cntraveller.in/photos/6711f4013f8b41f951c74129/master/w_1600%2Cc_limit/Homestay%2520in%2520evening%2520light.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/4f/9c/7e/caption.jpg?w=900&h=500&s=1",
          ]}
        />

        <WelcomeSection />
        <FeaturedFacilities />
        <TestimonialSlider />
        <AccommodationSection />
        <PlacesOfInterest />
      </Suspense>
    </div>
  );
};

export default HomeStayHomePage;
