import { useSnapshot } from "valtio"
import {HexColorPicker} from 'react-colorful'

const Palette = ({state}) => {
    const snap = useSnapshot(state)
  return (
    <div style={{position:'absolute', top:"5%", left:"3%"}}>
        <HexColorPicker color={snap.items[snap.current]} onChange={color => state.items[snap.current] = color}/>
        <h1>{state.current}</h1>
    </div>
  )
}

export default Palette