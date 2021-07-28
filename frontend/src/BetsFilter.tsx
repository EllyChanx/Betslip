import React, { SyntheticEvent } from 'react'
import { Dropdown, DropdownProps } from 'semantic-ui-react'

export type FilterValue = 'More Than 2' | 'Less Than 2'

interface DropdownOption {
	key: number
	text: FilterValue
	value: FilterValue
}

interface Props {
	selectedValue: FilterValue
	onChange: (option: FilterValue) => void
}

export const BetsFilter: React.FC<Props> = ({ selectedValue, onChange }: Props) => {
	const options: DropdownOption[] = [
		{ key: 1, text: 'More Than 2', value: 'More Than 2'},
		{ key: 2, text: 'Less Than 2', value: 'Less Than 2'},
	]

	const handleOnChange = (event: SyntheticEvent, value: DropdownProps) => {
		onChange(value.value as FilterValue)
	}

	return (<Dropdown selection={true} options={options} text={selectedValue} onChange={handleOnChange} />)
}

