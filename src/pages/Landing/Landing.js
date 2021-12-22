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
		bottom: '-45%',
		left: '20%'

	}

}))
const MainButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.spacing(4),
	opacity: '1',
	color: theme.palette.primary.main,
	width: '100%',
	padding: '14px',
	textTransform: 'capitalize',
	fontWeight: 'normal',
	'&:hover': {
		backgroundColor: '#F7FAFD',
	},
	[theme.breakpoints.down('md')]:{
		marginLeft: '20px',
		width: '150px'
	}
}))

const MainHeading = styled('h1')(({ theme }) => ({
	color: theme.palette.primary.main,
	fontFamily: 'Roboto',
	textAlign: 'left',
	width: '100%',
	paddingTop: '25px',
	fontWeight: 100,
	fontSize: 40,
	[theme.breakpoints.down('md')]: {
		textAlign: 'center',
		paddingRight:'50px',
		fontSize: 30,
	}
	
}))

const Paragraph = styled('h5')(({ theme }) => ({
	color: theme.palette.primary.main,
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


function Landing() {
	return (
		<div>
			<Grid container style={{ marginTop: '50px', }}>
				<Grid item md={5} order={{xs:3, md:2}}>
					<Grid container justifyContent='center' alignItems='center' style={{justifyContent:'center', alignItems:'center', paddingLeft:'50px', marginTop: '50px'}}>
						<Grid container fluid>
							<Grid item lg={12}>
							<MainHeading >Launch Software Projects, Today!</MainHeading>
							</Grid>
						</Grid>
						<Grid container  style={{ marginTop: '24px', paddingRight: '30px'}}>
							<Grid item>
							<Paragraph>We help design, build, and maintain software across multiple technologies and industries.</Paragraph>
							</Grid>
						</Grid>
						<Grid container spacing={3} style={{paddingRight:'75px'}}>
							<Grid item sm={8}>
								<MainButton disableRipple variant="outlined" >Get Started</MainButton>
							</Grid>
							<Grid item sm={4}>
								<MainButton disableRipple variant="outlined">Inquire</MainButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={2} order={{xs:2}}/>
				<Grid item md={5} style={{marginBottom: '75px', marginTop: '50px'}} order={{xs: 1, md: 3 }} className='align-self-center' >
					<div>
						<div style={{ position: 'relative' }}>
							<div >
								<Grid item xs={7} style={{ position: 'relative'}}>
									<img
										src="/assets/One.png"
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
												src="/assets/two.png"
												width='100%'
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
											src="/assets/three.png"
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