import React from 'react';
import './App.css';
import List from './List';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faTrash, faPlus)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: {
        text: '',
        key: ''
      },
      items: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }

  handleInput(event) {
    this.setState({
      todoItem: {
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.todoItem.text !== '') {
      this.setState({
        items: [...this.state.items, this.state.todoItem],
        todoItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItem = this.state.items.filter(item => 
      item.key !== key)
    this.setState({
      items: filteredItem
    })
  }

  setUpdate(text, key) {
    const items = this.state.items
    items.map(item => {
      return (item.key === key) ? item.text = text : '';
    })
    return this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className='App'>
        <form id='to-do-form' onSubmit={this.handleSubmit}>
          <input 
            type='text'
            placeholder='Enter text'
            value={this.state.todoItem.text}
            onChange={this.handleInput}/>
          <button type='submit'><FontAwesomeIcon className='delete' icon='plus'/></button>
        </form>
        <List 
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}>
        </List>
      </div>
    )
  }
}

export default App;
