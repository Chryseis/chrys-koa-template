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
        this.state = {
            name: '',
            sex: 0,
            birthday: +new Date()
        }

    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getUserList();
    }

    addUser = (name, sex, birthday) => {
        const {actions} = this.props;
        actions.addUser(name, sex, birthday);
    }


    removeUser = (id) => {
        const {actions} = this.props;
        actions.removeUser(id);
    }

    render() {
        const {userList} = this.props.user;
        const {name, sex, birthday} = this.state;
        return <div className="wrapper">
            <ul className="user-tb">
                <li className="user-tr"><span className="td">ID</span><span className="td">Name</span><span
                    className="td">Sex</span><span
                    className="td">Birthday</span><span className="td">Opeartion</span></li>
                {
                    userList && userList.length > 0 && userList.map((user, i) => <li className="user-tr"
                                                                                     key={user.id}><span
                        className="td">{user.id}</span><span
                        className="td">{user.name}</span><span className="td">{user.sex ? '女' : '男'}</span><span
                        className="td">{moment(user.birthday).format('YYYY-MM-DD')}</span><span
                        className="td opearation" onClick={() => this.removeUser(user.id)}>Delete</span></li>)
                }
                <li className="user-tr"><span className="td">ID</span><span className="td"><input
                    type="text" onChange={(e) => this.setState({name: e.target.value})}/></span><span
                    className="td"><input type="text"
                                          onChange={(e) => this.setState({sex: e.target.value == '男' ? 0 : 1})}/></span><span
                    className="td"><input type="text"
                                          onChange={(e) => this.setState({birthday: Number(moment(e.target.value).format('x'))})}/></span><span
                    className="td opearation" onClick={() => this.addUser(name, sex, birthday)}>add</span></li>
            </ul>
        </div>
    }
}

export
default
User