const a = [
    { id: 1, val: ['红', '黄'] },
    { id: 2, val: ['骑车', '单车'] },
    { id: 3, val: ['1500', '1300'] },
]

function test(a) {
    const result = a.map(item => {
        return item.val.map(val => {
            return {
                [item.id]: val
            }
        })
    })
    while (result.length > 1) {
        const temp = []
        for (let f = 0; f < result[0].length; f++) {
            for (let s = 0; s < result[1].length; s++) {
                temp.push({
                    ...result[0][f],
                    ...result[1][s]
                })
            }
        }

        result.splice(0, 2, temp)
    }
    return result[0]
}


console.log(test(a))