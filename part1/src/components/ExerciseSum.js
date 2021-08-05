import React from 'react'


const ExerciseSum = ({ parts }) => {
    const array1 = [1, 2, 3, 4];

    // 1 + 2 + 3 + 4
    console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));



    console.log(parts)

    var total = parts.reduce((s, p) => s + 1)
    console.log("This: ", total)
    return (
        <b>
            total of {total} exercises
        </b>
    )
}

export default ExerciseSum