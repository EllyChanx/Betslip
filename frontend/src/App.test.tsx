import React from 'react'
import App from './App'
import { mount } from 'enzyme';
import './testSetup'

describe('<App>', () => {
	it('', () => {
		const wrapper = mount(<App />)
		expect(wrapper.find('.App').length).toEqual(1)
	})
})