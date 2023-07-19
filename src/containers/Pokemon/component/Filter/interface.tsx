import { Dispatch, SetStateAction } from "react";

export interface Props {
    isMobile: boolean;
    setIsMobile: Dispatch<SetStateAction<boolean>>;
    isArrowActive: boolean; 
    setIsArrowActive: Dispatch<SetStateAction<boolean>>;
    filterBtnActive: string; 
    setFilterBtnActive: Dispatch<SetStateAction<string>>;
}   