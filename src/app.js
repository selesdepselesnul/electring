const domContainer = document.getElementById('root');
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lastTimerId = null;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.lastTimerId) {
      clearInterval(this.lastTimerId);
    }
    const ms = this.state.value * 60000;
    this.lastTimerId = setInterval(() => alert('Get Up stand Up !'), ms);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Time (in minutes):
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  e(LikeButton), 
  domContainer);