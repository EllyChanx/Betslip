import React, { useEffect, useState } from 'react'
import './App.css'
import { Card, Container, Image } from 'semantic-ui-react'
import { BetsFilter, FilterValue } from './BetsFilter'
import { AllowedOdds, Bet, ServerParam } from './types'

export const moreThanTwoOdds: AllowedOdds = { serverParams: 'decimalOddsMoreThanTwo', filterValue: 'More Than 2'}
export const lessThanTwoOdds: AllowedOdds = { serverParams: 'decimalOddsLessThanTwo', filterValue: 'Less Than 2'}

function App() {

	const [bets, setBets] = useState<Bet[]>([])
	const [filterValue, setFilterValue] = useState<FilterValue>(moreThanTwoOdds.filterValue)

	const fetchOddsData = (param: ServerParam) =>
		fetch(`http://localhost:4000/${param}`)
			.then(response => response.json())
			.then(data => setBets(data))

	useEffect(() => {
		if (filterValue === moreThanTwoOdds.filterValue) {
			fetchOddsData(moreThanTwoOdds.serverParams)
		} else if (filterValue === lessThanTwoOdds.filterValue) {
			fetchOddsData(lessThanTwoOdds.serverParams)
		}
	}, [filterValue])

	return (
		<Container>
			<BetsFilter onChange={setFilterValue} selectedValue={filterValue} />
			<Card fluid color='red' header='Option 1'>
				<Card.Header>{bets[0]?.name}</Card.Header>
			</Card>
		</Container>
	)
}

export default App
