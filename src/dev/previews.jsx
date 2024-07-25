import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Header from "../Header.jsx";
import App from "../App.jsx";

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/Header">
				<Header/>
			</ComponentPreview>
			<ComponentPreview path="/App">
				<App/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews