import * as React from 'react';
//import styles from './SdirDropdown.module.scss';
const styles = require('./Dropdown.module.scss');

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
  constructor(props: DropdownProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { 
      dropdownOpen: false
    }
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  public render() {
    return (
      <div className={styles.wrapper}>
        <select className={styles.dropdown}>
            {this.props.options.map(element => {
              return <option key={element.key} value={element.key}>{element.value}</option>
            })}
        </select>
      </div>
    );
  }
}
