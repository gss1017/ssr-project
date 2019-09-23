import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login, signOut} from './store/action'

class Header extends Component {
    render() {
        const {isLogin, login, signOut} = this.props;
        return (
            <div>
                <Link to="/">首页</Link>
                <br />
                {!isLogin && (<a onClick={() => {
                    login();
                }}>登录</a>)}
                {
                    isLogin && (
                        <Fragment>
                            <Link to="/translations">翻译</Link>
                            <br />
                            <a onClick={() => {
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
