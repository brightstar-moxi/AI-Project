import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import Image from 'next/image';

function CustomLoading({loading}) {
    return(
        <Dialog open={loading}>

  <DialogContent>
   <div className="flex flex-col items-center my-10 justify-center">
    <Image src={'/progress.gif'} width={100} height={100}/>
    <h2>Generating your video... Do not Refresh</h2>
   </div>
  </DialogContent>
</Dialog>
    )
}
export default CustomLoading