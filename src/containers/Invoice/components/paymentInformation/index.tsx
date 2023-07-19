import { Box, Button, Divider, Snackbar, Typography } from '@mui/material';
import { grey, red, blueGrey } from '@mui/material/colors';
import React, { FC, useEffect, useState } from 'react'
import { Props } from './interface';
import { InvoiceBoxCardInformation, InvoiceBoxText, InvoiceBoxTimeValid } from './style';
import {AccountBalanceWallet, AccountBalanceWalletOutlined, AccountBalanceWalletOutlined as walletIcon, FileCopyOutlined, FileCopyRounded, WalletOutlined } from '@mui/icons-material';
import data from '../../.../../../../datastore/json/invoice.json';
import dayjs, { Dayjs } from 'dayjs';
import { useRouter } from 'next/dist/client/router';
import moment from 'moment';


const PurchaseInformation:FC = () => {
    const router = useRouter();
    const invoiceData = data;
    const getEndPeriod = dayjs(invoiceData.data.end_period).format('dddd, D MMMM YYYY HH:mm');
    const getVaBank = invoiceData.data.payment_detail.va_bank;
    const getVaNumber = invoiceData.data.payment_detail.va_number;
    const getDiscount = invoiceData.data.discount;
    const getAmount = invoiceData.data.amount;
    const [open, setOpen] = useState(false);
    
    const dateNow = new Date();
    const dateEndPeriod = new Date(getEndPeriod);
    const startDate = moment(dateNow.getTime());
    const timeEnd = moment(dateEndPeriod.getTime());
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);

    const [second, setSecond] = useState(diffDuration.seconds());
    const [minute, setMinute] = useState(diffDuration.minutes());
    const [hour, setHour] = useState(diffDuration.hours());    


    
    const handlerCopyClick = () => {
      setOpen(true);
      navigator.clipboard.writeText(getVaNumber);
    }
        
    const time = () => {
        setSecond(second-1);

        if (second===0){
            setMinute(minute-1);
            setSecond(59);
        }
        if (minute===0){
            setHour(hour-1);
            setMinute(59);
        }
        if (hour===0){
            setHour(0)
        }
    }

    const handlerChangePaymentMethod = () => {
        router.push("/")
    }
    
    useEffect(() => {
        const interval = setInterval(() => time(),1000)
        return () => clearInterval(interval);
    })


    return (
    <>
            <Typography variant="h4" sx={{fontWeight:600}}>Informasi Pembayaran</Typography>
            <Divider sx={{marginTop:5}}/>
            <Box sx={InvoiceBoxTimeValid}>
                <Typography 
                    variant='h6' 
                    sx={{fontWeight:600}}
                >
                    Selesaikan pembayaran dalam
                </Typography>
                <Typography 
                    variant='h5' 
                    sx={{fontWeight:600, color:red[500], mt: 1}}
                >
                    {hour<10? `0${hour}`:hour}:{minute<10? `0${minute}`:minute}:{second<10? `0${second}`:second}
                </Typography>
                <Box sx={{display:"flex", mt:1, justifyContent:'center'}}>
                    <Typography 
                        variant='body1' 
                        sx={{fontWeight:400, color: blueGrey[500]}}
                    >
                        Batas akhir pembayaran     
                    </Typography>
                    <Typography 
                        variant='body1' 
                        sx={{fontWeight:600, ml: 1, color: blueGrey[500]}}
                    >
                        {getEndPeriod}
                    </Typography>
                </Box>
            </Box>
            <Box sx={InvoiceBoxCardInformation}>
                <Box sx={InvoiceBoxText}>
                    <Typography sx={{textAlign: "start", width: 1, fontWeight:600}}>Virtual Account</Typography>
                    <Box 
                        component="img" 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png' 
                        alt={getVaBank}
                        sx={{textAlign: "end", width: 80, height:20,}}
                    />
                </Box>
                <Divider sx={{marginY:4}}/>
                <Box sx={InvoiceBoxText}>
                    <Box sx={{textAlign: "start", width: 1}}>
                        <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Nomor Virtual Account</Typography>
                        <Typography sx={{fontWeight:600}}>{getVaNumber}</Typography>
                    </Box>
                    <Box sx={{width: 1, textAlign:"end"}}>
                        <Button sx={{textAlign: "end", width:1, p:0, display: 'flex'}} onClick={handlerCopyClick}>
                            <Box sx={{textAlign:'end', width: 1}}>Salin</Box> 
                            <Box sx={{ml:2,mt:3}}><FileCopyRounded/></Box> 
                        </Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={2000}
                            onClose={() => setOpen(false)}
                            message="Copied to clipboard"
                        />
                    </Box>
                </Box>
                <Divider sx={{marginY:4}}/>
                <Box sx={InvoiceBoxText}>
                    <Box sx={{textAlign: "start", width: 1}}>
                        <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Total Diskon</Typography>
                        <Typography sx={{fontWeight:600}}>Rp {getDiscount.slice(0,-3)}</Typography>
                    </Box>
                </Box>
                <Divider sx={{marginY:4}}/>
                <Box sx={InvoiceBoxText}>
                    <Box sx={{textAlign: "start", width: 1}}>
                        <Typography variant='caption' sx={{fontWeight:400, color:grey[400]}}>Total Pembayaran</Typography>
                        <Typography sx={{fontWeight:600}}>Rp {getAmount.slice(0,-3)}</Typography>
                    </Box>
                </Box>
                <Divider sx={{marginY:4}}/>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Button startIcon={<AccountBalanceWallet/>} onClick={handlerChangePaymentMethod}>Ubah Metode Pembayaran</Button>
                </Box>
                
            </Box>
    </>
    );
}

export default PurchaseInformation;
