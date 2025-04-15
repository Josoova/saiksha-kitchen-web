
import { useEffect, useRef } from "react";

interface MapProps {
  address?: string;
  height?: string;
}

const GoogleMap = ({ address = "81K Thiruvalluvar Street, Athipet, Chennai, Tamil Nadu 600058", height = "400px" }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const encodedAddress = encodeURIComponent(address);
  
  useEffect(() => {
    // Create an iframe with Google Maps embed when component mounts
    if (mapRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "0";
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      
      // Clear any existing content and append the iframe
      mapRef.current.innerHTML = "";
      mapRef.current.appendChild(iframe);
    }
  }, [encodedAddress]);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <div 
        ref={mapRef} 
        style={{ height }} 
        className="w-full"
      />
    </div>
  );
};

export default GoogleMap;
