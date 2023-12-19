import Dropdown from 'react-bootstrap/Dropdown'

function Menuequipement() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdownequipement">
                Equipements
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Menuequipement
