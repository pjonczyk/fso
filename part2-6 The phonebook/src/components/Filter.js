import React from 'react'

const Filter = ({ currentFilter, setCurrentFilter }) => {
    const handleFilter = (event) => {
        const newFilter = event.target.value
        console.log(newFilter)
        setCurrentFilter(newFilter)
    }

    return (
        <div>
            filter shown with <input value={currentFilter} onChange={handleFilter} />
        </div>
    )
}

export default Filter