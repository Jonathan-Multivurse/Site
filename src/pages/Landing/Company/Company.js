import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { LeftTitleBar } from '../TitleBar'
import { styled } from '@mui/material/styles'
import { DESIGN_PARAGRAPH, BUILD_PARAGRAPH, MAINTAIN_PARAGRAPH } from '../../../constants/constants'
import { useState } from 'react'
import { EggShapedImageContainer } from '../../../components/EggShapedImageContainer'
import { useMediaQuery } from '@mui/material'

const CircledImage = styled('img')(({ theme }) => ({
    border: '1px solid #222',
    borderRadius: '100%',
    padding: '15px',
    objectFit: 'cover',
    height: '80px',
    width: '80px',
    [theme.breakpoints.down('md')]: {
        height: '60px',
        width:'60px',
        padding:'10px'
    },
    
}))
const Paragraph = styled('p')(({ theme }) => ({
    textAlign: 'justify',
    color: '#222',
    fontFamily: 'Roboto',
    fontWeight: 300,
    letterSpacing: 1,
    lineHeight: 2,
    [theme.breakpoints.down('md')]: {
        
    }
}))
const ImageContainer1 = styled('img')(({ theme }) => ({
    height: '325px',
    width: '100%',
    borderRadius: '16px',
    objectFit: 'cover',
    marginTop: '16px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))

const ImageContainer2 = styled('img')(({ theme }) => ({
    height: '325px',
    width: '100%',
    borderRadius: '16px',
    objectFit: 'cover',
    marginTop: '16px',
    
}))

const Heading = styled('h1')(({ theme }) => ({
    color: "#ffffff",
    fontFamily: 'Helvetica',
    textAlign: 'left',
    fontWeight: 500,
    letterSpacing: 2,
    lineHeight: '150%',
    fontSize: 'xxx-large',
    marginTop: '32px',
    marginBottom: '32px',
    WebkitTextStrokeColor: '#222',
    WebkitTextStrokeWidth: '0.8px',
    [theme.breakpoints.down('md')]: {
        marginTop: '10px',
        marginBottom: '10px',
    }

}))

const Line = styled(Grid)(({ theme}) => ({
    [theme.breakpoints.down('md')]: {
        borderTop: '1px solid #222'
    },
    [theme.breakpoints.up('md')]: {
        borderRight: '1px solid #222'
    }
}))

const CONTENT = [
    {
        heading: "Design",
        paragraph: DESIGN_PARAGRAPH,
        image1: "/assets/D1.png",
        image2: "/assets/D2.png"
    },
    {
        heading: "Build",
        paragraph: BUILD_PARAGRAPH,
        image1: "/assets/B1.png",
        image2: "/assets/B2.png"
    },
    {
        heading: "Maintain",
        paragraph: MAINTAIN_PARAGRAPH,
        image1: "/assets/M1.png",
        image2: "/assets/M2.png"
    }
]


export default function Company() {
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
    const [selected, setSelected] = useState(0)
    return (
        <div style={{ marginTop: '60px' }} id="company">
            <Grid container>
                <Grid item md={5} xs={10}>
                    <LeftTitleBar title={'CRAFT'} content={'WHAT I DO IN A NUTSHELL'} />
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: '70px', paddingRight: '50px' }}>
                <EggShapedImageContainer item xs={2} className='align-self-end'>
                    <Grid container>
                        <img
                            src='/assets/G1-Cropped.png'
                            width='50%'
                            height='50%'
                            alt=''
                        />
                    </Grid>
                </EggShapedImageContainer>
                <Grid item xs={12} md={10}>
                    <Grid container>
                        <Grid item xs={12} md={4} className='align-self-center' style={{paddingLeft:'50px'}}>
                            <Grid container direction={largeScreen ? "column" : "row"} justifyContent='center'>
                                <style>
                                    {
                                        `.selected {
                                            border: 3px black solid;
                                            border-radius: 100%;

                                        }`
                                    }
                                </style>
                                <Grid item sm={2} xs={4} style={{ marginBottom: '50px' }}>
                                    <Button onClick={() => setSelected(0)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container className={selected === 0 ? 'selected' : ''} >
                                            <CircledImage
                                                src='/assets/Light_bulb_perspective_matte_s.png'
                                                alt='design' />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Line item sm={1} xs={0} style={{  alignSelf: 'center', marginBottom: '60px', marginTop: '40px', }}>
                                    <Grid container>
                                        <hr></hr>
                                    </Grid>
                                </Line>
                                <Grid item  sm={2} xs={4} style={{ marginBottom: '50px' }}>
                                    <Button onClick={() => setSelected(1)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container className={selected === 1 ? 'selected' : ''} >
                                            <CircledImage
                                                src='/assets/Tools_perspective_matte_s.png'
                                                alt='build' />
                                        </Grid>
                                    </Button>
                                </Grid>
                                <Line item sm={1} xs={0} style={{ alignSelf: 'center', marginBottom: '60px', marginTop: '40px' ,}} >
                                    <Grid container>
                                        <hr></hr>
                                    </Grid>
                                </Line>

                                <Grid item  sm={2} xs={4}>
                                    <Button onClick={() => setSelected(2)} style={{ background: 'transparent' }} disableRipple>
                                        <Grid container className={selected === 2 ? 'selected' : ''} >
                                            <CircledImage
                                                src='/assets/Heart_rate_perspective_matte_s.png'
                                                alt='maintain' />
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8} style={{paddingLeft:'50px'}}>
                            <Grid>
                                <Grid>
                                    <Paragraph style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto', fontWeight: 300, letterSpacing: 1, lineHeight: 2, }}>{CONTENT[selected].paragraph}</Paragraph>
                                    <Grid container>
                                        <Grid item xs={8} lg={4}>
                                            <Heading >{CONTENT[selected].heading}</Heading>
                                        </Grid>
                                        <Grid item xs={4} lg={8}  className='align-self-center'>
                                            <hr style={{ width: '98%', marginRight: '16px', height: 1 }}></hr>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2} style={{ marginTop: '8px' }}>
                                    <Grid item xs={4}>
                                        <ImageContainer1
                                            src={CONTENT[selected].image1}
                                            alt='design'
                                        />
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <ImageContainer2
                                            src={CONTENT[selected].image2}
                                            alt='design'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}