import React from 'react'
import App from './App'
import { mount } from 'enzyme';
import './testSetup'
import { Container, Dropdown } from 'semantic-ui-react';
import { BetsFilter } from './BetsFilter';

describe('<BetsFilter>', () => {

	it('Filter shows correct value and calls onChange when item is selected', () => {
		const onChange = jest.fn()
		const wrapper = mount(<BetsFilter onChange={onChange} selectedValue="More Than 2" />)
		const dropdown = wrapper.find(Dropdown)
		expect(dropdown.prop('text')).toEqual('More Than 2')

		dropdown.simulate('click').find('.item').last().simulate('click')
		expect(onChange).toHaveBeenCalledWith('Less Than 2')
	})

})