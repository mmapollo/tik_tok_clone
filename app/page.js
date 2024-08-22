import Image from "next/image";
import LeftBar from "./feed/LeftBar";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2" >
      {/* left nav container*/}
      <div className="w-[18vw] bg-lightGrey h-[100vh]">
        <LeftBar/>

      </div>

      {/* feed container */}
      <div className="w-[82vw]">

      </div>
      
    </div>
  );
}
