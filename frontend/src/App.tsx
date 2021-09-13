import React, { useEffect, useState } from 'react'
import './App.css'
import { Card, Container } from 'semantic-ui-react';
import { FilterValue } from './BetsFilter';

export interface Odd {
	bookmakerCode: string
	eachWayTerms: string
	clickoutUrl: string
	oddsFractional: string
	oddsDecimal: number
	oddsUS: number
	bookmakerBetId: string
	suspended: boolean
}

export interface Bet {
	name: string
	genericName: string
	bestOddsBookmakers: string
	betId: number
	map: string
	odds: Odd[]
}

export type ServerParam = 'decimalOddsMoreThanTwo' | 'decimalOddsLessThanTwo'

export interface AllowedOdds {
	serverParams: ServerParam;
	filterValue: FilterValue;
}

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
			const a = fetchOddsData(moreThanTwoOdds.serverParams)
			console.log(a)
		} else if (filterValue === lessThanTwoOdds.filterValue) {
			const b = fetchOddsData(lessThanTwoOdds.serverParams)
			console.log(b)
		}
	}, [filterValue])

	return (
		<Container>
			<Card.Header>{bets[0]?.name}</Card.Header>
		</Container>
	)
}

export default App
