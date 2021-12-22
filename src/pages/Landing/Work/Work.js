import Grid from '@mui/material/Grid'
import { RightTitleBar } from '../TitleBar';
import { WorkCard } from './WorkCard';
import { styled } from '@mui/material/styles'
import { ArrowLeftTwoTone, ArrowRightTwoTone } from '@mui/icons-material';
import Button from '@mui/material/Button'
import { useState } from 'react';
import { WORK_CARD_CONTENT } from './constants';
import { useMediaQuery } from '@mui/material';

const Circle = styled(Grid)(() => ({
    border: '1px solid #003366',
    borderRadius: '100%',
    width: '20px',
    height: '20px',
}))

const Circle1 = styled(Grid)(() => ({
    border: '1px solid #003366',
    borderRadius: '100%',
    width: '35px',
    height: '35px',
    justifyContent: 'center',
    borderRight: '1px solid black'
}))

const EggShapedImageContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    }
}))


export default function Work() {
    const [selectedPage, setSelectedPage] = useState(0)
    const md = useMediaQuery(theme => theme.breakpoints.down('md'))
    return (
        <Grid id="work">
            <Grid container justifyContent='end'>
                <Grid xs={12} sm={12} md={7} item>
                    <RightTitleBar title='WORK' content='OUR CUSTOMERS DELIGHT IN WHAT WE DO' />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item order={md ? 2 : 1} xs={10} lg={8}>
                    <Grid container>
                        <Grid item md={6}>
                            <Grid container marginTop='50px'>
                                <Grid item xs={3} />
                                <Grid item xs={9} >
                                    <Grid container>
                                        <WorkCard
                                            cardContent={WORK_CARD_CONTENT[selectedPage][0]}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <Grid container marginTop='50px'>
                                <Grid item xs={3} />
                                <Grid item xs={9} >
                                    <WorkCard
                                        cardContent={WORK_CARD_CONTENT[selectedPage][1]}
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={6}>
                            <Grid container marginTop='50px'>
                                <Grid item xs={3} />
                                <Grid item xs={9} >
                                    <WorkCard
                                        cardContent={WORK_CARD_CONTENT[selectedPage][2]}
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item md={6}>
                            <Grid container marginTop='50px'>
                                <Grid item xs={3} />
                                <Grid item xs={9}>
                                    <WorkCard
                                        cardContent={WORK_CARD_CONTENT[selectedPage][3]}
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item order={md ? 1 : 2} alignSelf='center' xs={12} md={2} >
                    <style>
                        {
                            `.selected-page {
                                            border-right: 1px black solid;
                                            width:'21px';

                                        }`
                        }
                    </style>
                    <Grid container rowGap={md ? 1 : 2} alignItems='center' justifyContent='center' direction={md ? 'row' : 'column'} style={{ paddingLeft: '50px', paddingRight: '50px', marginTop: '50px', }} >
                        <Grid item xs={1} order={1}>
                            <Grid container className={selectedPage === 0 ? 'selected-page' : ''} style={{width:'22px'}}>
                                <Circle />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}  order={2}>
                            <Grid container  className={selectedPage === 1 ? 'selected-page' : ''} style={{width:'22px'}}>
                                <Circle />
                            </Grid>
                        </Grid>
                        <Grid item xs={1} order={3}>
                            <Grid container  className={selectedPage === 2 ? 'selected-page' : ''} style={{width:'22px'}}>
                                <Circle />
                            </Grid>
                        </Grid>

                        <Grid item xs={3} sm={2} order={md ? 4 : 3} style={{marginTop: md ? 0  : 32}}>
                            
                            <Button onClick={() => {
                                selectedPage < 2 ?
                                    setSelectedPage(selectedPage + 1) : setSelectedPage(0)
                            }
                            } style={{ background: 'transparent' }} disableRipple>
                                <Circle1>
                                    <ArrowRightTwoTone fontSize='large' />
                                </Circle1>
                            </Button>
                        </Grid>
                        <Grid item xs={3} sm={2} order={md ? 3 : 4}>
                            <Button onClick={() => {
                                selectedPage > 0 ?
                                    setSelectedPage(selectedPage - 1) : setSelectedPage(2)
                            }
                            } style={{ background: 'transparent' }} disableRipple>
                                <Circle1>
                                    <ArrowLeftTwoTone fontSize='large' />
                                </Circle1>
                            </Button>
                        </Grid>
                        <Grid item xs={3} sm={5} order={5}>
                            {md ?
                                <hr color='#003366' ></hr>
                                : <Grid container direction='column'>
                                    <Grid item style={{ height: '500px', marginTop: '32px', borderLeft: '1px solid #003366', width: '1px' }} className='align-self-end' />
                                </Grid>}
                        </Grid>
                    </Grid>
                </Grid>
                <EggShapedImageContainer item lg={2} order={3} className='align-self-end' >
                    <Grid container className='justify-content-end'>
                        <img
                            src='/assets/Cy1-Cropped.png'
                            width='60%'
                            alt=''
                            height='75%' />
                    </Grid>
                </EggShapedImageContainer>
            </Grid>
        </Grid>
    )
}