import React from 'react'
import ReactDOM from 'react-dom'

import { Select } from '@dse.e/react'

import '@dse.e/scss/lib/Utilities.css'
import '@dse.e/scss/lib/Text.css'
import '@dse.e/scss/lib/Margin.css'
import '@dse.e/scss/lib/Select.css'
import '@dse.e/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
