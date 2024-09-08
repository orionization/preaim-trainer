export default function Crosshair (props) { 
    const {location, image, height} = props

    if (!location || typeof location.x !== 'number' || typeof location.y !== 'number') {
        return null
    }

    return <img src={image} height={height} width={height} style={{
        position: 'absolute',
        top: location.y - height/2,
        left: location.x - height/2
    }}/>
}