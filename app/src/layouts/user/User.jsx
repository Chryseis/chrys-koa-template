/**
 * Created by Administrator on 2017/12/31.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAciton from '../../actions/user';
import './user.less';

@connect(state => ({
    user: state.user
}), dispatch => ({
    actions: bindActionCreators(userAciton, dispatch)
}))
class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getUser();
    }

    render() {
        const {user} = this.props;
        return <div className="wrapper">
            <ul className="user-tb">
                <li className="user-tr"><span className="td">Name</span><span className="td">Sex</span><span className="td">Birthday</span><span className="td">Opeartion</span></li>
                <li className="user-tr"><span className="td">Name</span><span className="td">Sex</span><span className="td">Birthday</span><span className="td">Opeartion</span></li>
            </ul>
        </div>
    }
}

export default User