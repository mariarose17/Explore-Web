import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LoginPage extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div class="wrapper">
                <form class="form-signin">


                    <img src="../public/images/logo.png" />
                    {/* <!-- <h2 class="form-signin-heading">LOGIN</h2> --> */}
                    <div class="floating-label">
                        <div class="form-group">
                            <input type="text" id="name" class="form-control" required />
                            <label class="form-control-placeholder" for="name">Username</label>
                            <img src="../public/images/user.svg" />
                        </div>
                        <div class="form-group">
                            <input type="password" id="name" class="form-control" required />
                            <label class="form-control-placeholder" for="name">Password</label>
                            <img src="../public/images/locked.svg" />
                        </div>
                    </div>
                    <div class="bg">
                        <div>

                            <div class="chiller_cb">
                                <input id="myCheckbox2" type="checkbox" />
                                <label for="myCheckbox2">Remember Me</label>
                                <span></span>
                            </div>

                        </div>
                        <a>Forgot Password?</a>
                    </div>

                    <button class="btn btn-lg custom-btn-primary btn-block" type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}
