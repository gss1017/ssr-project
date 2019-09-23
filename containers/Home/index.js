import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import {fetch_home_list} from './store/action';

class Home extends Component {

    componentDidMount() {
        const {list} = this.props;
        //防止客户端重复请求
        if (!list.length) this.props.getHomeList()
    }

    getList() {
        const {list} = this.props;
       return list.map((item) => {
            return (
                <div key={item.hotelId}>{item.address}</div>
            );
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div>hello world {this.props.name}</div>
                <div>
                    <h3>Home List</h3>
                    {this.getList()}
                </div>
                <button onClick={() => {window.alert(2)}}
                >click</button>
            </div>
        );
    }

    static loadData(store) {
        // 给服务端的 store 中注入数据
        return store.dispatch(fetch_home_list());
    }
}

const mapStateToProps = (state) => ({
    name: state.home.name,
    list: state.home.list
});
const mapDispatchToProps = (dispatch) => ({
    getHomeList: () => {
        dispatch(fetch_home_list())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
