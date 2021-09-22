import React from 'react'
import App from './App'
import { mount, ReactWrapper } from 'enzyme';
import './testSetup'
import { Container } from 'semantic-ui-react';
import { bet1, bet2 } from './testSetup';
import { act } from 'react-dom/test-utils';
import { BetsFilter } from './BetsFilter';
const fetchMock = require('fetch-mock-jest');

describe('<App>', () => {
	it('', async () => {

		fetchMock.get('http://localhost:4000/decimalOddsLessThanTwo', [bet1])
		fetchMock.get('http://localhost:4000/decimalOddsMoreThanTwo', [bet2])

		let wrapper: ReactWrapper;
		await act(async () => {
			wrapper = mount(<App />)
		})
		expect(wrapper!.find(Container).length).toEqual(1)
		expect(wrapper!.find(BetsFilter).prop('selectedValue')).toEqual('More Than 2')
		expect(wrapper!.find('.header').text()).toEqual(bet2.name)
	})
})