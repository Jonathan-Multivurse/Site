import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Company from "./Company/Company";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Work from './Work/Work';
import { styled } from '@mui/material/styles'

const ImageContainer = styled(Grid)(({ theme }) => ({
	position: 'absolute',
	left: '45%',
	bottom: '20%',
	top: '-15%',
	right: '5%',

}))

const BlueImageContainer = styled(Grid)(({ theme }) => ({
	position: 'absolute',
	left: '15%',
	top: '55%',
	right: '20%',
	[theme.breakpoints.down('md')]: {
		bottom: '-55%',
		left: '20%'

	}

}))
const MainButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.spacing(4),
	opacity: '1',
	color: '#222',
	width: '100%',
	padding: '14px',
	borderColor: '#222',
	textTransform: 'capitalize',
	fontWeight: 'normal',
	'&:hover': {
		backgroundColor: '#F7FAFD',
		borderColor: '#222',
	},
	[theme.breakpoints.down('md')]:{
		marginLeft: '20px',
		width: '150px'
	}
}))

const MainHeading = styled('h1')(({ theme }) => ({
	color: '#222',
	fontFamily: 'Roboto',
	textAlign: 'left',
	width: '100%',
	paddingTop: '25px',
	fontWeight: 100,
	lineHeight: 1.5,
	fontSize: 40,
	[theme.breakpoints.down('md')]: {
		textAlign: 'center',
		paddingRight:'50px',
		fontSize: 30,
	},
	
}))

const Paragraph = styled('h5')(({ theme }) => ({
	color: '#222',
	textAlign: "left",
	fontFamily: 'Helvetica',
	fontWeight: 100,
	lineHeight: 1.6,
	marginTop: '30px',
	marginBottom: '50px',
	[theme.breakpoints.down('md')]:{
		textAlign: "center",
		paddingLeft: '20px',
		paddingRight: '20px'
	}
}))

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank')
	if (newWindow) newWindow.opener = null
  }


function Landing() {
	return (
		<div>
			<Grid container style={{ marginTop: '50px', }}>
				<Grid item md={5} order={{xs:3, md:2}}>
					<Grid container justifyContent='center' alignItems='center' style={{ justifyContent:'center', alignItems:'center', paddingLeft:'50px', marginTop: '100px'}}>
						<Grid container fluid>
							<Grid container lg={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<MainHeading >Full Stack Engineer <br/>Data Science || M. Learning</MainHeading>
							</Grid>
						</Grid>
						<Grid container  style={{ marginTop: '24px', paddingRight: '30px'}}>
							<Grid item>
							<Paragraph>I design, build, and maintain modern software applications and data analytics tools.</Paragraph>
							</Grid>
						</Grid>
						<Grid container spacing={3} style={{paddingRight:'75px'}}>
							<Grid item md={7} xs={12}>
								<MainButton disableRipple variant="outlined" onClick={() => openInNewTab('https://firebasestorage.googleapis.com/v0/b/site-360ad.appspot.com/o/Resume.pdf?alt=media&token=396b7c21-3f17-42c3-9183-04665a607bfe')}>Resume</MainButton>
							</Grid>
							<Grid item md={5} xs={12}>
								<MainButton disableRipple variant="outlined" href="#contact">Email</MainButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={2} order={{xs:2}}/>
				<Grid item md={5} xs={12} style={{marginBottom: '75px', marginTop: '50px'}} order={{xs: 1, md: 3 }} className='align-self-center' >
					<div>
						<div style={{ position: 'relative'}}>
							<div >
								<Grid item xs={7} style={{ position: 'relative'}}>
									<img
										src="/assets/headshot.png"
										width='100%'
										height='100%'
										alt="Multivurse"
									/>
								</Grid>
							</div>
							<div>
								<Grid container>
									<Grid item xs={7}>
										<ImageContainer>
											<img
												src="/assets/suit.png"
												width='105%'
												height='100%'
												alt="Multivurse"
											/>
										</ImageContainer>
									</Grid>
								</Grid>
							</div>
							<div>
								<Grid item xs={7}>
									<BlueImageContainer>
										<img
											src="/assets/coffee.png"
											width='100%'
											height='100%'
											alt="Multivurse"
										/>
									</BlueImageContainer>
								</Grid>
							</div>
						</div>
					</div>
				</Grid>
				
			</Grid>
			<Company />
			<Products />
			<Services />
			<Work />
		</div >
	)
}

export default Landing