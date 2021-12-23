const HEIGHT = '80px'
const WIDTH = '80px'

export function ServiceImage({ source }) {
    return (
        <img
            style={{
                border: '1px solid #222',
                borderRadius: '16px',
                objectFit:'cover',
                padding: '2px'
                
            }}
            src={source}
            width={WIDTH}
            height={HEIGHT}
            alt='service' />
    )
}