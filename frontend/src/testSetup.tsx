import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import { Bet } from './App';

configure({ adapter: new Adapter() });

export const bet1: Bet = {
    "name": "name1",
    "genericName": "genericName1",
    "bestOddsBookmakers": "bookmark1",
    "betId": 1,
    "map": "map-1",
    "odds": [
        {
            "bookmakerCode": "bkc1",
            "eachWayTerms": "",
            "clickoutUrl": "",
            "oddsFractional": "11/8",
            "oddsDecimal": 1.00,
            "oddsUS": 11,
            "bookmakerBetId": "111",
            "suspended": false
        }
    ]
}

export const bet2: Bet = {
    "name": "name2",
    "genericName": "genericName2",
    "bestOddsBookmakers": "bookmark2",
    "betId": 2,
    "map": "map-2",
    "odds": [
        {
            "bookmakerCode": "bkc2",
            "eachWayTerms": "",
            "clickoutUrl": "",
            "oddsFractional": "11/8",
            "oddsDecimal": 2.22,
            "oddsUS": 22,
            "bookmakerBetId": "222",
            "suspended": false
        }
    ]
}
