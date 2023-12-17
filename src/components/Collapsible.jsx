import React from 'react'
import { useCollapse } from 'react-collapsed'

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div>
            <button {...getToggleProps()}>
                {isExpanded ? '' : 'Fiabilité'}
            </button>
            <section {...getCollapseProps()}>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
            </section>
        </div>
    )
}

export default Collapsible
