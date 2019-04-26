import * as React from 'react';
export interface DropdownProps {
    options: DropdownOption[];
    onChange?(): void;
}
export interface DropdownOption {
    key: any;
    value: string;
}
export interface DropdownState {
    dropdownOpen: boolean;
}
export default class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps);
    toggle(): void;
    render(): JSX.Element;
}
