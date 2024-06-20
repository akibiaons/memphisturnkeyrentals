import dynamic from "next/dynamic";

const MemphisMap = dynamic(() => import("@/components/leaflet/MemphisMap"), {
  ssr: false,
});

const ListingGrid = dynamic(() => import("@/components/leaflet/ListingGrid"), {
  ssr: false,
});

const ListingPage = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="w-[100%] lg:max-w-8xl lg:max-h-[100vh]">
          <MemphisMap />
        </div>
      </div>
      <div className="lg:hidden block w-[100%]">
        <div className="px-1">
          <ListingGrid />
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
