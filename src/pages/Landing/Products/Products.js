import Grid from '@mui/material/Grid'
import { RightTitleBar } from '../TitleBar'
import { styled } from '@mui/material/styles'
import { BUSINESS_PARAGRAPH, PUBLISHING_PARAGRAPH } from '../../../constants/constants'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { BUSINESS_LIST, PUBLISHING_LIST } from './constants'
import { EggShapedImageContainer } from '../../../components/EggShapedImageContainer'
import { useMediaQuery } from '@mui/material'

const Circle = styled(Grid)(() => ({
    border: '1px solid #003366',
    borderRadius: '100%',
    width: '30px',
    height: '30px',
    marginLeft: '8px',
    marginRight: '8px'

}))


export default function Products() {
    const [selectedPublishing, setSelectedPublishing] = useState(0)
    const [selectedBusiness, setSelectedBusiness] = useState(0)

    const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm')) 
    return (
        <Grid style={{ color: '#003366' }} id="products">
            <Grid container justifyContent='end'>
                <Grid xs={10} md={5} item>
                    <RightTitleBar title='PRODUCTS' content='EXPLORE OUR PROJECT PORFOLIO' />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={5} style={{ paddingLeft: '50px', paddingRight: '50px', marginTop:'100px' }}>
                    <Grid container>
                        <h5 style={{ textAlign: 'left', fontWeight: 'normal' }}>PUBLISHING</h5>
                        <p style={{ textAlign: 'justify', marginTop: '10px', lineHeight: '200%', }}>{PUBLISHING_PARAGRAPH}</p>
                        <hr style={{ width: '100%' }}></hr>
                    </Grid>
                    <Grid container className='justify-content-center' style={{ marginTop: 20 }}>
                        <Grid item>
                            <img
                                style={{ border: '8px solid black', borderRadius: '100%', objectFit: 'cover' }}
                                src={PUBLISHING_LIST[selectedPublishing].image}
                                height='175px'
                                width='175px'
                                alt=''
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: '20px', justifyContent: 'center' }}>
                        <h5 style={{ fontWeight: 'normal' }}>{PUBLISHING_LIST[selectedPublishing].heading}</h5>
                        <p style={{ textAlign: 'justify', lineHeight: '200%' }}>{PUBLISHING_LIST[selectedPublishing].content}</p>
                    </Grid>
                    <Grid container columnGap={smallScreen ? 2 : 1} justifyContent='center' style={{ marginTop: '32px' }}>
                        <style>
                            {
                                `
                                    .selected-publishing {
                                        border-bottom: 1px solid black;
                                        
                                    }

                                `

                            }
                        </style>
                        <Grid  item xs={1} className={selectedPublishing === 0 ? 'selected-publishing' : ''} >
                            <Grid container justifyContent='center'>
                                <Button onClick={() => setSelectedPublishing(0)} style={{ background: 'transparent' }} disableRipple>
                                    <Circle />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} >
                            <Grid container className={selectedPublishing === 1 ? 'selected-publishing' : ''} justifyContent='center' >
                                <Button  onClick={() => setSelectedPublishing(1)} style={{ background: 'transparent' }} disableRipple>
                                    <Circle />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid  item xs={1} className={selectedPublishing === 2 ? 'selected-publishing' : ''}>
                            <Grid container justifyContent='center'>
                                <Button onClick={() => setSelectedPublishing(2)} style={{ background: 'transparent' }} disableRipple>
                                    <Circle />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={5} style={{ paddingLeft: '50px', paddingRight: '50px', marginTop:'100px' }}>
                    <Grid container >
                        <h5 style={{ textAlign: 'left', fontWeight: 'normal' }}>BUSINESS</h5>
                        <p style={{ textAlign: 'justify', marginTop: '10px', lineHeight: '200%' }}>{BUSINESS_PARAGRAPH}</p>
                        <hr style={{ width: '100%' }}></hr>
                    </Grid>
                    <Grid container justifyContent='center' style={{ marginTop: 20 }}>
                        <Grid item>
                            <img
                                style={{ border: '8px solid black', borderRadius: '100%', objectFit: 'cover' }}
                                height='175px'
                                width='175px'
                                src={BUSINESS_LIST[selectedBusiness].image}
                                alt='' />
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: '20px', justifyContent: 'center' }}>
                        <h5 style={{ fontWeight: 'normal' }} >{BUSINESS_LIST[selectedBusiness].heading}</h5>
                        <p style={{ textAlign: 'justify', lineHeight: '200%' }}>{BUSINESS_LIST[selectedBusiness].content}</p>

                    </Grid>
                    <Grid container columnGap={smallScreen ? 2 : 1} justifyContent='center'  style={{ marginTop: '32px' }}>
                        <style>
                            {
                                `
                                    .selected-business {
                                        border-bottom: 1px solid black;
                                    }
                                `
                            }
                        </style>
                        <Grid item xs={1} className={selectedBusiness === 0 ? 'selected-business' : ''}>
                            <Grid container justifyContent='center'>
                                <Button  onClick={() => setSelectedBusiness(0)} style={{ background: 'transparent' }} disableRipple>
                                    <Circle />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className={selectedBusiness === 1 ? 'selected-business' : ''}>
                            <Grid container justifyContent='center'>
                                <Button onClick={() => setSelectedBusiness(1)} style={{ background: 'transparent' }} disableRipple>
                                    <Circle />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className={selectedBusiness === 2 ? 'selected-business' : ''}>
                            <Grid container justifyContent='center'>
                                <Button onClick={() => setSelectedBusiness(2)} style={{ background: 'transparent' }} disableRipple>
                                    <Circle />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <EggShapedImageContainer item md={2} className='align-self-end' >
                    <Grid container className='justify-content-end'>
                        <img
                            src='/assets/R1-Cropped.png'
                            width='60%'
                            alt=''
                            height='75%' />
                    </Grid>
                </EggShapedImageContainer>
            </Grid>
        </Grid>

    )
}