import React, { Component } from 'react';
import './todo.css';

class TodoFilter extends Component {
  filterChange = (e) => {
	console.log(e);
	console.log(e.target);
	console.log(e.target.value);
    this.props.onSelect(e.target.value);
	console.log("============filterChange this===============");
	//console.log(this);
  }

  ddddd() {
    console.log(this); //undefined
  }
  render() {
    let { data, active, total } = this.props;
	//console.log("============render this===============");
	//console.log(this);
    return (
      <div className="todo-item todo-filter">
        <div className="li"><span className="item-num">{total} items</span></div>
        {data.map((item, index) =>
          <label key={item + index} className="li">
            <input type="radio" name="filter" id={item} value={item} hidden checked={active === item ? true : false} onChange={this.filterChange} />
            <span className="radio-name">{item}</span>
          </label>
        )}
      </div>
    );
  }
}

export default TodoFilter;
