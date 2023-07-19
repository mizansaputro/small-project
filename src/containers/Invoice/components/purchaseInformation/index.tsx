import { Box, Button, Divider, Typography } from '@mui/material';
import { grey, red, blueGrey } from '@mui/material/colors';
import React, { FC } from 'react'
import { Props } from './interface';
import data from '../../.../../../../datastore/json/invoice.json';
import { InvoiceBoxCardInformation, InvoiceBoxText, InvoiceBoxTimeValid } from './style';
import dayjs from 'dayjs';

const PurchaseInformation:FC = () => {
    const invoiceData = data;
    const getInvoiceNumber = invoiceData.data.invoice_number;
    const getStartPeriod = dayjs(invoiceData.data.created_at).format('DD/MM/YYYY');
    const getMemberName = invoiceData.data.member_name;
    const getMemberRole = invoiceData.data.family_member;
    const getIntervalType = invoiceData.data.interval_type;
    const getProducts = invoiceData.data.products;

    return (
    <>
            <Typography variant="h4" sx={{fontWeight:600}}>Informasi Pembelian</Typography>
            <Divider sx={{marginY:4}}/>
            <Box sx={InvoiceBoxText}>
                <Box sx={{textAlign: "start", width: 1}}>
                    <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Nomor Pembelian</Typography>
                    <Typography sx={{fontWeight:600}}>{getInvoiceNumber}</Typography>
                </Box>
                <Box sx={{textAlign: "end", width: 1}}>
                    <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Tanggal</Typography>
                    <Typography sx={{fontWeight:600}}>{getStartPeriod}</Typography>
                </Box>
            </Box>
            <Divider sx={{marginY:4}}/>
            <Box sx={InvoiceBoxText}>
                <Box sx={{textAlign: "start", width: 1}}>
                    <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Penanggung Jawab</Typography>
                    <Typography sx={{fontWeight:600}}>{getMemberName}</Typography>
                </Box>
                <Box sx={{textAlign: "end", width: 1}}>
                    <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Jenis Kelompok</Typography>
                    <Typography sx={{fontWeight:600}}>{getMemberRole[0].role}</Typography>
                </Box>
            </Box>
            <Typography variant="h5" sx={{my:4,fontWeight:600}}>Informasi Produk</Typography>
            <Box sx={InvoiceBoxCardInformation}>
                <Box sx={InvoiceBoxText}>
                    <Typography sx={{textAlign: "start", width: 1, color:grey[400]}}>Jangka Waktu</Typography>
                    <Typography sx={{textAlign: "end", width: 1, fontWeight:600}}>{getIntervalType}</Typography>
                </Box>
                <Divider sx={{marginY:4}}/>
                <Box sx={InvoiceBoxText}>
                    <Typography sx={{textAlign: "start", width: 1, fontWeight:600}}>Membership</Typography>
                    <Typography sx={{textAlign: "end", width: 1, fontWeight:600}}>Rp 20000</Typography>
                </Box>
                <Divider sx={{marginY:4}}/>
                {
                    getProducts?.map((item) => {
                        return (
                            <Box sx={InvoiceBoxText} key={item.id}>
                                <Box sx={{textAlign: "start", width: 1}}>
                                    <Typography variant='caption' sx={{fontWeight:600}}>{item.product}</Typography>
                                    <Typography sx={{fontWeight:400, color:grey[400]}}>{item.tier_name}</Typography>
                                </Box>
                                <Box sx={{display: "flex", alignItems:"center", width: 1}}>
                                    <Typography sx={{textAlign: "end", width: 1, fontWeight:600}}>Rp {item.price}</Typography>
                                </Box>
                            </Box>
                        );
                    })
                }
            </Box>
                
    </>
  );
}

export default PurchaseInformation;
