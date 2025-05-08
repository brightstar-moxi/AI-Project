import {Button} from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs";
// import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2>Subcribe to Brightstar</h2>
<Button >Subcribe</Button>

<UserButton/>
   </div>
  );
}
