import Grid from '@mui/material/Grid'
import * as React from 'react'
// import { FacebookRounded, Instagram, LinkedIn, Twitter, YouTube, } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Link from '@mui/material/Link'
const FOOTER = styled(Grid)(() => ({
    background: 'transparent linear-gradient(180deg, #3B3B3B 0%, #000000 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    opacity: 1,
    justifyContent: 'center',
    marginTop: '100px',
    color: '#fff',
    paddingTop: '50px'
}))
const VerticalLine = styled(Grid)(({ height, theme }) => ({
    opacity: 0.4,
    height: height,
    borderWidth: '2px',
    borderLeftStyle: 'solid',
    borderImage: 'linear-gradient(to top left,#0040FF , #FF0091) 1 100%',
    [theme.breakpoints.down('sm')]: {
        borderWidth: '1px',
    }
    
}))
export default function Footer() {
    return (
        <FOOTER>
            <Grid container id="contact" spacing={1}>
                <Grid item xs={12} md={4} className='align-self-center'>
                    <Grid container justifyContent='center'>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <Grid container style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: '20px' }}>
                                        <Grid item>
                                            <h6 style={{ letterSpacing: 1.2, fontWeight: 300, paddingBottom: 20 }}>JONATHAN DANIELS</h6>
                                            <hr style={{ color: "#BF0032FF", height: 2, textAlign: 'center', background: 'transparent radial-gradient(closest-side at 50% 50%, #FF0091 70%, #0040FF 100%) 0% 0% no-repeat padding-box', marginTop: '24px', marginBottom: '24px' }}></hr>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} justifyContent='center'>
                                <Grid item>
                                    <Link href='https://github.com/Jonathan-Multivurse' ><img src="/assets/J-logo.png" height="50" alt="Upwork"></img></Link>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} className='align-self-center'>
                    <address >
                        <p style={{ fontWeight: 300, fontSize: 14, paddingTop: 15, letterSpacing: 0.5 }}>Email: jonathan2daniels@gmail.com</p>
                        <br />
                        <p style={{ fontWeight: 300, fontSize: 13, letterSpacing: 0.6 }}>Github: https://github.com/Jonathan-Multivurse</p>
                        <p style={{ fontWeight: 300, fontSize: 13, letterSpacing: 0.5 }}>Address: 5396 Quebec St, Vancouver, BC V5W 2N5</p>
                        <p style={{ fontWeight: 300, fontSize: 13, letterSpacing: 0.8 }}>Phone no: +1-236-999-1330 </p>
                    </address>
                </Grid>
                <Grid item xs={12} md={3} className='align-self-end'>
                    <Grid container spacing={3} justifyContent='center' alignItems="center" >
                        <Grid item className='align-self-end'><VerticalLine height='75px' /></Grid>
                        <Grid item className='align-self-end'><VerticalLine height='125px' /></Grid>
                        <Grid item className='align-self-end'><VerticalLine height='225px' /></Grid>
                        <Grid item className='align-self-end'><VerticalLine height='225px' /></Grid>
                        <Grid item className='align-self-end'><VerticalLine height='125px' /></Grid>
                        <Grid item className='align-self-end'><VerticalLine height='75px' /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FOOTER>
    )
}