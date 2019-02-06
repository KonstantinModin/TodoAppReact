import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form/';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Call to Fernando'),
            this.createTodoItem('Repair car'),
            this.createTodoItem('Talk with AJ')            
        ],
        term: '',
        button: 'All'
    };

    createTodoItem(label) {
        return {
           label,
           important: false,
           done: false,
           id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter((el) => el.id !== id) 
            };
            
            
            
            
            // const idx = todoData.findIndex((el) => el.id === id);
            
            // const newArray = [
            //     ...todoData.slice(0, idx),
            //     ...todoData.slice(idx + 1)
            // ];

            // return {
            //     todoData: newArray
            // };
        });
    };

    addItem = (text) => {
       const newItem = this.createTodoItem(text);

       this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ]
    
            return {
                todoData: newArr
            };
       });       
    };
        
    search(items, term, button) {        
        let buttonArr = [];
        switch (button) {
            case 'Active': 
                buttonArr = items.filter((item) => !item.done);
                break;
            case 'Done': 
                buttonArr = items.filter((item) => item.done);
                break;
            default: 
                buttonArr = items;           
        }
       if (term === "") return buttonArr
       return buttonArr.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };
    

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return  [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };
    
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState( {term} );                    
    };

    onstatusButtonClick = (e) => {
        const button = e.target.innerHTML;
        this.setState( {button} );        
    }

    render() {
        const { todoData, term, button } = this.state;
        const visibleItems = this.search(todoData, term, button);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel 
                    onSearchChange={ this.onSearchChange } />
                    <ItemStatusFilter
                        filter={button}
                        statusButtonClick={ this.onstatusButtonClick } />
                </div>
            
                <TodoList 
                    todos={ visibleItems } 
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant } 
                    onToggleDone={ this.onToggleDone } 
                    />
                <ItemAddForm
                    onItemAdded={ this.addItem }
                 />
                <div className="copyright">Copyright © 2019 Konstantin Modin All Rights Reserved. Designed with React</div>
            </div>
        );
    }
    
};

