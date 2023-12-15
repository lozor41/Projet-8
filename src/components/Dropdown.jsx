import Dropdown from 'react-bootstrap/Dropdown';

function Menufiabilité() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdownfiabilité">
          Fiabilité
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informatins sont régulièrement vérifiées par nos équipes.</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  
  export default Menufiabilité;