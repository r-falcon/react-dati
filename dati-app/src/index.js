import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/data'
import App from './view/App'
import { Provider } from 'react-redux'
import './assets/css/style.less'
import Random from './view/Test/Random'
import Exam from './view/Test/Exam'
import Imitate from './view/Test/Imitate'
import Result from './view/Test/Result'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/random" component={Random}></Route>
      <Route path="/result" component={Result}></Route>
      <Route path="/exam" component={Exam}></Route>
      <Route path="/imitate" component={Imitate}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'))
