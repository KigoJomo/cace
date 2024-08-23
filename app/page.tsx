import Image from "next/image";
import LiveFeed from "./components/LiveFeed";
import Appliances from "./components/Appliances";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-4">
      <div className="surveillance w-full h-1/2 flex gap-4">
        <LiveFeed/>
      </div>
      <div className="appliances w-full h-1/2 flex gap-4">
      <Appliances />
      </div>
    </section>
  );
}
