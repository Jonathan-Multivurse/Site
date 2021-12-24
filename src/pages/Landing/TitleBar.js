import Grid from "@mui/material/Grid"
import { styled } from '@mui/material/styles'

const LEFT_TITLE_BAR = styled(Grid)(() => ({
    background: 'transparent linear-gradient(180deg, #000000 0%, #3B3B3B 100%) 0% 0% no-repeat padding-box',
    borderTopRightRadius: '199px',
    marginTop: '100px',
    borderBottomRightRadius: '199px',
    paddingLeft: '50px',
    paddingTop: '30px',
    width: '90%',
    paddingBottom: '20px',
    paddingRight: '30px',
    justifyContent: 'center'
}))

const RIGHT_TITLE_BAR = styled(Grid)(() => ({
    background: 'transparent linear-gradient(180deg, #000000 0%, #3B3B3B 100%) 0% 0% no-repeat padding-box',
    borderTopLeftRadius: '199px',
    marginTop: '100px',
    borderBottomLeftRadius: '199px',
    width: '90%',
    marginLeft: '10%',
    paddingLeft: '90px',
    paddingTop: '30px',
    paddingBottom: '20px',
    justifyContent: 'center',

}))

export function LeftTitleBar({ title, content }) {
    return (
        <LEFT_TITLE_BAR>
            <Grid item>
                <Grid container>
                    <Grid item xs={6}>
                        <h6 style={{ textAlign: 'left', color: '#FFFFFF', fontFamily: 'Roboto', fontSize: 16, fontWeight: 400, letterSpacing: 2 }}>{title}</h6>
                    </Grid>
                    <Grid item md ={6} xs={0}>
                        <hr style={{  height: 2, width: '70%', background:'transparent radial-gradient(closest-side at 50% 50%, #FF0091 70%, #0040FF 100%) 0% 0% no-repeat padding-box' }}></hr>
                    </Grid>
                </Grid>
                <hr style={{  height: 2, width: '85%', background:'transparent radial-gradient(closest-side at 50% 50%, #FF0091 70%, #0040FF 100%) 0% 0% no-repeat padding-box' }}></hr>
                <p style={{ textAlign: 'left', color: '#FFFFFF', fontFamily: 'helvetica', fontSize: 13, fontWeight: 'lighter', letterSpacing: 1.8, marginTop: 20  }}>{content}</p>
            </Grid>
        </LEFT_TITLE_BAR>
    )
}

export function RightTitleBar({ title, content }) {
    return (
        <RIGHT_TITLE_BAR>
            <Grid item>
                <Grid container >
                    <Grid item xs={6}>
                        <h6 style={{ textAlign: 'left', color: '#FFFFFF', fontFamily: 'Roboto', fontSize: 16, fontWeight: 400, letterSpacing: 2  }}>{title}</h6>
                    </Grid>
                    <Grid item md ={6} xs={0} >
                        <hr style={{ color: "#BF0032FF", height: 2, width: '70%', background:'transparent radial-gradient(closest-side at 50% 50%, #FF0091 70%, #0040FF 100%) 0% 0% no-repeat padding-box' }}></hr>
                    </Grid>
                </Grid>
                <hr style={{ color: "#BF0032FF", height: 2, width: '85%', background:'transparent radial-gradient(closest-side at 50% 50%, #FF0091 70%, #0040FF 100%) 0% 0% no-repeat padding-box' }}></hr>
                <p style={{ textAlign: 'left', color: '#FFFFFF', fontFamily: 'helvetica', fontSize: 13, fontWeight: 'lighter', letterSpacing: 1.8, marginTop: 20  }}>{content}</p>
            </Grid>
        </RIGHT_TITLE_BAR>
    )
}
