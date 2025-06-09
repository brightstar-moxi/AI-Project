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

function CustomLoading(loading) {
    return(
        <Dialog open={loading}>

  <DialogContent>
   <div>
    <Image src={'/progress.gif'} width={100} height={100}/>
    <h2>Loading....</h2>
   </div>
  </DialogContent>
</Dialog>
    )
}
export default CustomLoading