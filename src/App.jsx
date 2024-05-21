import './App.css'
import Button from "./components/btn.jsx";
import Item from "./components/item.jsx";
import Tile from "./components/tile.jsx";
import {lorem} from "./assets/texts/text.js";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button name={"To the collection"} />
                <Button name={"Shop all bags"} />
                <Button name={"Pre-orders"} disabled={true}/>
            </nav>
            <main>
                <Item label={"Best seller"}
                      img={"bag_1"}
                      name={"The handy bag"}
                      price={"€400,-"} />
                <Item label={"Best seller"}
                      img={"bag_2"}
                      name={"The Stylish bag"}
                      price={"€250,-"} />
                <Item label={"new collection"}
                      img={"bag_3"}
                      name={"The simpel bag"}
                      price={"€300,-"} />
                <Item label={"New collection"}
                      img={"bag_4"}
                      name={"The trendy bag"}
                      price={"€150,-"} />
            </main>
            <footer>
                <Tile title={"THE BRAND"}
                      paragraph={lorem.brandp1}
                      paragraph2={lorem.brandp2}  />
                <Tile img={"brand"} />
                <Tile img={"story"} />
                <Tile title={"OUR STORY"}
                      paragraph={lorem.story} />
            </footer>
        </>

    )
}

export default App
