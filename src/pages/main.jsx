import BottomBar from "@/components/common/bottom-bar";

const Main = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow bg-primary-paper p-4 rounded-br-xl">
        <p className="font-inter h-full w-full">Main Page</p>
      </div>
      {/* Bottom bar */}
      <div className="px-4 py-1">
        <BottomBar />
      </div>
    </div>
  );
};

export default Main;
