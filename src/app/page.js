import Image from "next/image";
import { useRouter } from "next/navigation";
import Box from "@/components/reuse/Box";
import { _dashBoardItem } from "@/components/constant/Utilities";

export default async function Home() {


  return (
    <>
      <div className="flex flex-wrap justify-around bg-white">
        {_dashBoardItem.map((item) => (
          <Box key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}


