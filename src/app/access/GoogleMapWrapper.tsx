"use client";

import GoogleMap from "@/components/GoogleMap";

const GoogleMapWrapper = () => {
  return (
    <GoogleMap
      postcode="150-0002"
      address="東京都渋谷区渋谷1-1-1"
      address2="＊＊ビル1F"
    />
  );
};

export default GoogleMapWrapper;
