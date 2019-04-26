import * as React from 'react';
export interface ButtonProps {
    value: string;
    primary?: boolean;
    disabled?: boolean;
    block?: boolean;
    onClick?(e: React.MouseEvent<any, MouseEvent>): void;
}
export interface ButtonState {
}
export default class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps);
    render(): JSX.Element;
}
