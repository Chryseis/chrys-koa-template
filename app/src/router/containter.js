/**
 * Created by Administrator on 2017/12/31.
 */
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/configureStore';
import User from '../layouts/user'


class Container extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Provider store={store}>
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path='/' component={User}/>
                        <Route render={()=><div>404</div>}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    }
}

export default Container;