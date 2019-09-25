import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login, signOut} from './store/action';
import withStyle from '../../withStyle';
import s from './index.css';

class Header extends Component {

    render() {
        const {isLogin, login, signOut} = this.props;
        return (
            <div className={s.container}>
                <Link to="/" className={s.item}>首页</Link>
                {
                    !isLogin && (
                        <a className={s.item} onClick={() => {
                            login();
                        }}>登录</a>
                    )
                }
                {
                    isLogin && (
                        <Fragment>
                            <Link className={s.item} to="/translations">翻译</Link>
                            <a className={s.item} onClick={() => {
                                signOut();
                            }}>退出</a>
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.header.isLogin
});
const mapDispatchToProps = (dispatch) => ({
    login: () => {
        dispatch(login())
    },
    signOut: () => {
        dispatch(signOut())
    }
});

const HeaderExport = withStyle(Header, s);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderExport);
