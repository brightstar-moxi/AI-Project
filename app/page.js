import {Button} from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h2>Subcribe to Brightstar</h2>
<Button variant="destructive">Subcribe</Button>

<UserButton/>
   </div>
  );
}
