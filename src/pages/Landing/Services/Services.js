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
        <Grid container id="skills">
            <Grid container>
                <Grid item md={5} xs={10} >
                    <LeftTitleBar title={'SKILLS'} content={'CORE TECHNICAL ABILITIES'} />
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: '75px' }}>
                <Grid item xs={5}>
                    <Grid container justifyContent='center'>

                        <EggShapedImageContainer item xs={4} className='align-self-end'>
                            <Grid container  >
                                <img
                                    src='/assets/P1-Cropped.png'
                                    width='60%'
                                    alt=''
                                    height='60%'
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
                                                source='/assets/reactlogo.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button onClick={() => setSelectedService(1)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 1 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/flutter.jpeg'
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
                                                source='/assets/nodejslogo.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button onClick={() => setSelectedService(3)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 3 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/django.png'
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
                                                source='/assets/graphql.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button onClick={() => setSelectedService(5)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container style={{ margin: 8 }} className={selectedService === 5 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/pandas.png'
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
                                                source='/assets/pyspark.jpeg'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(7)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid contaier style={{ margin: 8 }} className={selectedService === 7 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/Tenserflow.jpeg'
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
                                                ='/assets/pytorch.png'
                                            />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => setSelectedService(9)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid continer style={{ margin: 8 }} className={selectedService === 9 ? 'selected-service' : ''}>
                                            <ServiceImage
                                                source='/assets/gcp.jpeg'
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
                            <h5 style={{ textAlign: 'left', color: '#222', fontFamily: 'Roboto', fontSize: 20, fontWeight: 400, letterSpacing: 2 }}>{SERVICES[selectedService].heading}</h5>
                            <hr width='80%'></hr>
                        </Grid>
                    </Grid>
                    <Grid container md={9} sm={9} xs={10}>
                        <Grid item style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto', fontWeight: 300, letterSpacing: 1, lineHeight: 2, marginTop: 75 }}>
                            <p >{SERVICES[selectedService].content}</p>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid >
            
        </Grid >
    )
}