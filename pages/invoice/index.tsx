import React, { FC } from "react";

import { BaseWrapper } from "@components/Molecules";
import InvoiceContainer from "@containers/Invoice";

interface Props {}

const Index: FC<Props> = () => (
    <BaseWrapper page="">
        <><InvoiceContainer/></>
    </BaseWrapper>
);

export default Index;
