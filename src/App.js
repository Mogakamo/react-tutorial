import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ],

    }
}

export default App