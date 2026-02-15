"use client"
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import to keep it client-side (though lottie-react is safer than dotlottie)
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAnimation = () => {
  const [animationData, setAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Fetch the JSON file from public folder
    fetch('/contact-animation.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Failed to load animation:", err));
  }, []);

  if (!animationData) return <div className="animate-pulse bg-gray-200 w-full h-full rounded">Loading...</div>;

  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default LottieAnimation;
