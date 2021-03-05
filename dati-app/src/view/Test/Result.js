import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

function mapStateToProps(state) {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class Home extends React.Component {
  render() {
    return (
      <div className="backContainer">
        <h1>
          恭喜您获得<span>{this.props.location.state.score}</span>分
        </h1>
        <Button type="primary" className="backBtn" onClick={this.goBack}>
          回到首页
        </Button>
      </div>
    )
  }

  goBack = () => {
    this.props.history.push('/')
  }
}

const Result = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Result
