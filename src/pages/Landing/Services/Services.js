import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { LeftTitleBar } from "../TitleBar";
import { ServiceImage } from "./ServiceImage";
import { useState } from 'react';
import { SERVICES } from './constants';
import { EggShapedImageContainer } from '../../../components/EggShapedImageContainer'
export default function Services() {
    const [selectedService, setSelectedService] = useState(0)
    return (
        <Grid container id="services">
            <Grid container>
                <Grid item md={5} xs={10} >
                    <LeftTitleBar title={'SERVICES'} content={'QUALITY SOFTWARE DEVELOPMENT FOR EVERYONE'} />
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: '50px' }}>
                <Grid item xs={5}>
                    <Grid container justifyContent='center'>

                        <EggShapedImageContainer item xs={4} className='align-self-end'>
                            <Grid container  >
                                <img
                                    src='/assets/P1-Cropped.png'
                                    width='50%'
                                    alt=''
                                    height='50%'
                                />
                            </Grid>
                        </EggShapedImageContainer>
                        <Grid item xs={8} className='align-self-center'>

                            <style>
                                {
                                    `
                                        .selected-service {
                                            background: transparent linear-gradient(180deg, #000000 0%, #3B3B3B 100%) 0% 0% no-repeat padding-box;
                                            border-radius: 16px;
                                    }
                                `
                                }
                            </style>
                            <Grid spacing={1} container justifyContent='center'>
                                <Grid item >
                                    <Button onClick={() => setSelectedService(0)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 0 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/web-design.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button onClick={() => setSelectedService(1)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 1 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/blockchain.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container spacing={1} justifyContent='center'>

                                <Grid item>
                                    <Button onClick={() => setSelectedService(2)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 2 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/artificial-intelligence.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button onClick={() => setSelectedService(3)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 3 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/computer.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container spacing={1} justifyContent='center'>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(4)} style={{ background: 'transparent' }} disableRipple >
                                        <Grid container style={{ margin: 8 }} className={selectedService === 4 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/cyber-security.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button onClick={() => setSelectedService(5)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 5 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/analysis.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid container spacing={1} justifyContent='center'>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(6)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 6 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/graphic-tablet.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(7)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid contaier style={{ margin: 8 }} className={selectedService === 7 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/robot.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} justifyContent='center'>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(8)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 8 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source
                                                ='/assets/vr-glasses.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(9)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid continer style={{ margin: 8 }} className={selectedService === 9 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/internet-of-things.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={7} style={{ marginTop: '20px' }}>
                    <Grid container style={{ paddingRight: '30px' }}>
                        <Grid item xs={8}>
                            <h5 style={{ textAlign: 'left', fontFamily: 'helvetica', color: '#003366' }}>{SERVICES[selectedService].heading}</h5>
                            <hr width='80%'></hr>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                style={{ height: '60px', color: '#fff', width: '100%', paddingLeft: '20%', paddingRight: '20%', borderRadius: '8px', border: '1px solid #003366', background: 'transparent linear-gradient(180deg, #000000 0%, #3B3B3B 100%) 0% 0% no-repeat padding-box' }}
                            >EXPLORE</Button>
                        </Grid>
                    </Grid>
                    <Grid container style={{ paddingRight: '30px' }}>
                        <Grid item style={{ textAlign: 'justify', color: '#003366', marginTop: '75px', fontFamily: 'Roboto', fontWeight: '300'}}>
                            <p style={{ lineHeight: '200%' }}>{SERVICES[selectedService].content}</p>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid >
            <Grid container>
                <Grid item>
                    <hr style={{ marginLeft: '20%', marginTop: '30px', color: '#003366', width: '70%', marginRight: '10%' }} ></hr>
                </Grid>
            </Grid>
        </Grid >
    )
}