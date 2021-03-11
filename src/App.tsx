import React from 'react';
import {ListItem} from './ListItem'

type ListType = {
  text: string,
  complete: boolean
}

const list: ListType[] = [{text: "Make this list thing", complete: false}]

function App() {
  return <ListItem list={list[0]}/>
}


export default App;
