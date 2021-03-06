import React from 'react'

class Counter extends React.Component {
  formatCount = () => {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
  getBadgeClasses = () => {
    let classes = 'badge badge-pill me-4 py-2 px-4 alert alert-'
    classes += this.props.counter.value === 0 ? 'secondary' : 'primary'
    return classes
  }

  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    )
  }
}

export default Counter
