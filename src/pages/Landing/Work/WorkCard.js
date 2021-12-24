import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { RemoveRedEye } from '@mui/icons-material'
import Grid from '@mui/material/Grid'

const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank')
	if (newWindow) newWindow.opener = null
  }

export function WorkCard({ cardContent, link }) {
   
    return (
        <Grid container
            md={10} xs={12}
            style={{
                position: 'relative',
                width: '100%',
                height: 350
            }}>
            <img
                style={{
                    position: 'absolute',
                    left: -65,
                    top: 110,
                    zIndex: 1,
                    borderRadius: 16,
                    objectFit: 'cover'
                }}
                src={cardContent.imgSource}
                alt=''
                height='120px'
                width='120px' />
            <Card style={{
                alignContent: 'center',
                justifyContent: 'center',
                paddingLeft: '60px',
                paddingTop: '60px',
                width: '100%',
                height: '100%',
                border: '1px solid #222',
                borderRadius: '20px',
                textAlign: 'start',
                color: "#223366",
                boxShadow: 'none',
                background: '#FFFFFF 0% 0% no-repeat padding-box'
            }}>
                <CardContent style={{ width: '100%' }}>
                    <Typography  style={{ marginBottom: 15, textAlign: 'left', color: '#222', fontFamily: 'Roboto', fontSize: 16, fontWeight: 400, letterSpacing: 2   }}>{cardContent.title}</Typography>
                    <Typography style={{textAlign: 'justify', color: '#222', fontFamily: 'Roboto', fontWeight: 300, letterSpacing: 1, lineHeight: 1.5, fontSize: 14}}>
                        {cardContent.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' disableRipple style={{ borderRadius: '20px', border: '1px solid #222', }} onClick={ () => openInNewTab(link)}>
                        <RemoveRedEye fontSize='small' style={{color: '#222'}}/>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}