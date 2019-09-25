import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {fetchHomeList} from './store/action';
import withStyle from '../../withStyle';
import s from './index.css';

class Home extends Component {

    componentDidMount() {
        const {list} = this.props;
        //防止客户端重复请求
        if (!list.length) this.props.getHomeList()
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
        return (
            <div  className={s.container}>
                <Helmet>
                    <title>
                        列表页
                    </title>
                    <meta name="description" content="这是一个列表页"/>
                </Helmet>
                <div>hello world {this.props.name}</div>
                <div>
                    <h3>Home List</h3>
                    {this.getEleShowList()}
                </div>
                <button onClick={() => {window.alert(2)}}
                >click</button>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    name: state.home.name,
    list: state.home.list
});
const mapDispatchToProps = (dispatch) => ({
    getHomeList: () => {
        dispatch(fetchHomeList())
    }
});

const HomeExport = withStyle(Home, s);
HomeExport.loadData = (store) => {
    // 给服务端的 store 中注入数据
    return store.dispatch(fetchHomeList());
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeExport);
