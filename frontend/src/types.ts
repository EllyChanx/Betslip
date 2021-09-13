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