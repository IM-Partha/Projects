import React from 'react'
import Table from './Table'

const Test = () => {

    const tab=[
        {
            lable: "Tab 1",
            content:<div>This is Tabe 1</div>
        },
        {
            lable:"Tab 2",
            content:<div>This is Tabe 2</div>
        },
        {
            lable:"Tab 3",
            content:<div>This is Tabe 3</div>
        }
    ]

  return <Table tablecontent={tab} />
}

export default Test