import React, { FC, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import data from '../../datastore/json/invoice.json';
import { InvoiceBoxCard, InvoiceBoxContainer } from "./style";
import PurchaseInformation from "./components/purchaseInformation";
import PaymentInformation from "./components/paymentInformation";

const Invoice: FC = () => {
    const invoiceData = data;
    
    return (
      <Box sx={InvoiceBoxContainer}>
        <Box sx={InvoiceBoxCard}>
            <PaymentInformation/>
        </Box>
        <Box sx={InvoiceBoxCard}>
            <PurchaseInformation/>
        </Box>
      </Box>  
    );
};

export default Invoice;
