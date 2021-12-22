const HEIGHT = '83px'
const WIDTH = '83px'

export function ServiceImage({ source }) {
    return (
        <img
            style={{
                border: '1px solid #003366',
                borderRadius: '16px',
                padding: '10px',
                objectFit:'cover',
                
            }}
            src={source}
            width={WIDTH}
            height={HEIGHT}
            alt='service' />
    )
}