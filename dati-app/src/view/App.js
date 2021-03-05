import React from 'react'
// import { connect } from 'react-redux'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'

class App extends React.Component {
  // 随机
  randomTest = () => {
    // 这两种跳转一样的结果
    this.props.history.push('/random')
    // window.location.href = '/random'
  }
  // 闯关
  examTest = () => {
    console.log(222)
    this.props.history.push('/exam')
  }
  // 模拟
  imitateTest = () => {
    console.log(333)
    this.props.history.push('/imitate')
  }

  render() {
    return (
      <div className="container">
        <h1>选择刷题模式</h1>
        <Button type="primary" className="btn" onClick={this.randomTest}>
          随机题库
        </Button>
        <Button type="primary" className="btn" onClick={this.examTest}>
          闯关练习
        </Button>
        <Button type="primary" className="btn" onClick={this.imitateTest}>
          仿真模拟
        </Button>
      </div>
    )
  }
}

// const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default App
