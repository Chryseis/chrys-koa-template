/**
 * Created by Administrator on 2017/12/31.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
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
        actions.getUserList();
    }

    removeUser = (id) => {
        const {actions} = this.props;
        actions.removeUser(id);
    }

    render() {
        const {userList} = this.props.user;
        return <div className="wrapper">
            <ul className="user-tb">
                <li className="user-tr"><span className="td">ID</span><span className="td">Name</span><span className="td">Sex</span><span
                    className="td">Birthday</span><span className="td">Opeartion</span></li>
                {
                    userList && userList.length > 0 && userList.map((user, i) => <li className="user-tr"
                                                                                     key={user.id}><span
                        className="td">{user.id}</span><span
                        className="td">{user.name}</span><span className="td">{user.sex ? '女' : '男'}</span><span
                        className="td">{moment(user.birthday).format('YYYY-MM-DD')}</span><span
                        className="td opearation" onClick={()=>this.removeUser(user.id)}>Delete</span></li>)
                }
            </ul>
        </div>
    }
}

export default User