import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchList} from './store/action';
import s from './index.css';

class Translations extends Component {

    componentDidMount() {
        const {list} = this.props;
        //防止客户端重复请求
        if (!list.length) this.props.getList()
    }

    getEleShowList() {
        const {list} = this.props;
        return list.map((item) => {
            return (
                <div key={item.hotelId}>{item.country}</div>
            );
        })
    }

    render() {
        const {isLogin} = this.props;
        return isLogin
            ? (
                <div className={s.container}>
                    <h3>Translation List</h3>
                    {this.getEleShowList()}
                </div>
            )
            : <Redirect to="/"/>
    }

    static loadData(store) {
        // 给服务端的 store 中注入数据
        return store.dispatch(fetchList());
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.header.isLogin,
    list: state.translations.list
});
const mapDispatchToProps = (dispatch) => ({
    getList: () => {
        dispatch(fetchList())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Translations);
