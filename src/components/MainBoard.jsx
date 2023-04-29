import React from 'react';

const cols = ['a','b','c','d','e','f','g','h'];
// const cols = ['h','g','f','e','d','c','b','a'];
// const rows = [1,2,3,4,5,6,7,8];
const rows = [8,7,6,5,4,3,2,1];

export const MainBoard = () => {
  return (
    <div className='h-[95vmin] w-[95vmin] bg-[#769656] grid grid-cols-8 grid-rows-8 m-auto rounded-xl overflow-hidden'>
        {
            rows.map( ( row ) => {
                return (cols.map( ( col, colIndex ) => {

                    const order = row + colIndex;
                    const orderClass = `order-${order}`

                    if ( order % 2 === 0 ) {
                        return (
                            <div key={`${row}${col}`} className={`${row}${col} order-${orderClass} bg-[#eeeed2]`}>
                            
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={`${row}${col}`} className={`${row}${col} order-${orderClass}`}>
                            
                            </div>
                        )
                    }
                }))
            })
        }
    </div>
  )
}
