import React from 'react';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox ';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <React.Fragment>
        {
          checkboxes.map(item => {
            if(item%2 === 0){
              this.setState = (!this.state.checkedItems.get(item.name))
            }
            return (
              <label key={item.key}>
                <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                {item.name}<br />
              </label>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;