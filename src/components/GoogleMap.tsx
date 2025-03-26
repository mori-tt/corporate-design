"use client";

interface GoogleMapProps {
  address: string;
  address2: string;
  postcode: string;
}

const GoogleMap = ({ address, address2, postcode }: GoogleMapProps) => {
  // 住所をエンコードしてGoogle Maps埋め込みURLを作成
  const encodedAddress = encodeURIComponent(address);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=16&output=embed&iwloc=near`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div
      className="w-full h-full flex flex-col bg-white rounded-xl overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      <div className="relative w-full h-full">
        <iframe
          src={mapEmbedUrl}
          title="Google Maps"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-auto p-4 bg-white border-t">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">DESIGN STUDIO</h3>
            <p className="text-sm text-neutral-600">
              {postcode} {address} {address2}
            </p>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium px-3 py-1.5 bg-black text-white hover:bg-neutral-800 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            開く
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
