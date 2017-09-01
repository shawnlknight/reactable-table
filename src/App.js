import React, { Component } from 'react'
import logo from './logo.svg'
import Reactable from 'reactable'
import data from './data'

const {Table, Tr, Td} = Reactable

class App extends Component {
  render() {
    return (
      <Table>
        {data.map(row => {
          return (
            <Tr className={row.className}>
                <Td column="name">{row.name}</Td>
                <Td column="age">{row.age}</Td>
                <Td column="city">{row.city}</Td>
            </Tr>
          )
        })}
      </Table>
    )
  }
}

export default App
