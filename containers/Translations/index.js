import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchList} from './store/action';
import withStyle from '../../withStyle';
import s from './index.css';

class Translations extends Component {

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
                    <Helmet>
                        <title>
                            列表转译页
                        </title>
                        <meta name="description" content="这是一个列表转译页"/>
                    </Helmet>
                    <h3>Translation List</h3>
                    {this.getEleShowList()}
                </div>
            )
            : <Redirect to="/"/>
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

const TranslationsExport = withStyle(Translations, s);
TranslationsExport.loadData = (store) => {
    // 给服务端的 store 中注入数据
    return store.dispatch(fetchList());
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationsExport);
