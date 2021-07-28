import React from 'react'
import App from './App'
import { mount } from 'enzyme';
import './testSetup'
import { Container } from 'semantic-ui-react';

describe('<App>', () => {
	it('', () => {
		const wrapper = mount(<App />)
		expect(wrapper.find(Container).length).toEqual(1)
	})
})