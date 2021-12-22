import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { RemoveRedEye } from '@mui/icons-material'
import Grid from '@mui/material/Grid'
export function WorkCard({ cardContent }) {
   
    return (
        <Grid container
            style={{
                position: 'relative',
                width: '100%',
                height: 400
            }}>
            <img
                style={{
                    position: 'absolute',
                    left: -65,
                    top: 125,
                    zIndex: 1,
                    borderRadius: 16,
                    objectFit: 'cover'
                }}
                src={cardContent.imgSource}
                alt=''
                height='140px'
                width='140px' />
            <Card style={{
                alignContent: 'center',
                justifyContent: 'center',
                paddingLeft: '72px',
                paddingTop: '100px',
                width: '100%',
                height: '100%',
                border: '1px solid #003366',
                borderRadius: '20px',
                textAlign: 'start',
                color: "#223366",
                boxShadow: 'none',
                background: '#FFFFFF 0% 0% no-repeat padding-box'
            }}>
                <CardContent style={{ width: '100%' }}>
                    <Typography variant='h5' guttorBottom>{cardContent.title}</Typography>
                    <Typography variant="body2">
                        {cardContent.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' disableRipple style={{ borderRadius: '20px' }}>
                        <RemoveRedEye fontSize='small' />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}