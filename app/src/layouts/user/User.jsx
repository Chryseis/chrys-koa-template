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
        const {user, actions} = this.props;
    }

    render() {
        return <div>User</div>
    }
}

export default User