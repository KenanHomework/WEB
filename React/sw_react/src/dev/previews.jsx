import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import RandomPlanet from "../components/random-planet";
import App from "../components/app";
import ItemList from "../components/item-list";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/RandomPlanet">
          <RandomPlanet />
        </ComponentPreview>
        <ComponentPreview path="/App">
          <App />
        </ComponentPreview>
        <ComponentPreview path="/ItemList">
          <ItemList />
        </ComponentPreview>
      </Previews>
    );
}

export default ComponentPreviews