/**
 * Created by Administrator on 2018/1/1.
 */
class user {
    constructor(id, name, sex, birthday, createDate, createUser) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.createDate = createDate;
        this.createUser = createUser;
    }
}

module.exports = user;