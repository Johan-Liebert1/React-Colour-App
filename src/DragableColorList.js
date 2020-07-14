import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'

import DragableColorBox from './DragableColorBox'

// the below syntax is same as export default SortableContainer(DragableColorList)

const DragableColorList = SortableContainer(({colors, removeColor}) => {
    return (
        <div style={{height: '100%'}}>
            {colors.map((color, i) => 
                <DragableColorBox 
                    key={color.name}
                    index={i}
                    color={color.color} 
                    name={color.name} 
                    handleClick={() => removeColor(color.name)}
                />
            )}
        </div>
    )
})

export default DragableColorList
