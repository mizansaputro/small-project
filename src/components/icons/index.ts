import dynamic from "next/dynamic";

export const Ic404Error = dynamic(() => import("./Ic404Error"));
export const Ic500Error = dynamic(() => import("./Ic500Error"));
