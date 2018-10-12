import React from 'react';
import { API_BASE_URL } from '../Common/apiUrl';
import Notifications, { notify } from 'react-notify-toast';
import axios from 'axios';
import queryString from 'query-string';
import { ScaleLoader } from 'react-spinners';
import { NavLink } from 'react-router-dom';

class ForgetPassword extends React.Component {
    constructor(props) {
        super(props)
        // const parsed = queryString.parse(props.location.search);
        this.state = {
            emailId: "",
            emailValid: false,
            formValid: false,
            password: "",
            confirmPassword: "",
            errors: { password: '', confirmPassword: '' },
            // verificationemailId: parsed.emailId,
            // token: parsed.token,
            loading: false,
            confirmPasswordValid: false,
            passwordValid: false,
            isPwdChange: false
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleChangePwd = this.handleChangePwd.bind(this);
        this.toggleForgetPwd = this.toggleForgetPwd.bind(this);
        // this.toggleChangePwd = this.toggleChangePwd.bind(this);
    }
    // componentWillMount() {
    //     if (this.state.verificationemailId && this.state.token) {
    //         let payload = {
    //             emailId: this.state.verificationemailId,
    //             token: this.state.token
    //         }
    //         const forgetPwdUrl = API_BASE_URL + "forgot/password/emailLinkVerification";

    //         axios.post(forgetPwdUrl, payload)
    //             .then(response => {
    //                 if (response.status == 200) {
    //                     // this.setState({ isPwdChange: true });
    //                     sessionStorage.setItem('verificationdata', JSON.stringify(response.data.linkVerificationInfo));
    //                     notify.show(response.data.message, "success");
    //                 }
    //                 else if (response.status == 206) {
    //                     notify.show(response.data.message, "error");
    //                 }
    //             })
    //             .catch(function (error) {
    //             });
    //     }

    // }
    // handleChangePwd(e) {
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     this.setState({ [name]: value },
    //         () => { this.validateField(name, value) });
    // }
    // validateField(fieldName, value) {
    //     let fieldValidationErrors = this.state.errors;
    //     let confirmPasswordValid = this.state.confirmPasswordValid;
    //     let passwordValid = this.state.passwordValid;
    //     if (fieldName === 'password') {
    //         fieldValidationErrors.password = value.length > 7 ? '' : 'Must contain minimum 8 character';
    //         //  if(value != this.state.password ) {
    //         //   fieldValidationErrors.confirmPassword = 'Password does not match';
    //         // } else 
    //         if (this.state.confirmPassword != "") {

    //             if (value != this.state.confirmPassword) {
    //                 fieldValidationErrors.confirmPassword = 'Password does not match';
    //             } else {
    //                 fieldValidationErrors.confirmPassword = '';
    //             }
    //         }
    //     } else if (fieldName === 'confirmPassword') {
    //         if (value != this.state.password) {
    //             fieldValidationErrors.confirmPassword = 'Password does not match';
    //         } else {
    //             fieldValidationErrors.confirmPassword = '';

    //         }
    //     }

    //     this.setState({
    //         errors: fieldValidationErrors,
    //         confirmPasswordValid: confirmPasswordValid,
    //         passwordValid: passwordValid
    //     }, this.validateForm);
    // }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.errors;
        let emailValid = this.state.emailValid;

        switch (fieldName) {
            case 'emailId':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.emailId = emailValid ? '' : ' Please enter valid email id';
                break;
            default:
                break;
        }

        this.setState({
            errors: fieldValidationErrors,
            emailValid: emailValid,
        }, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.state.emailValid });
    }

    toggleForgetPwd() {
        let payload = {
            "emailId": this.state.emailId
        }
        this.setState({ loading: true });
        const apiBaseUrl = API_BASE_URL + "forgot/password/emailVerification";
        axios.post(apiBaseUrl, payload)
            // .then(response => {
            //     this.setState({ loading: false });
            //     if (response.status == 200) {
            //         this.props.history.push('/login');
            //         notify.show(response.data.message, "success");

            //     } else if (response.status == 206) {
            //         notify.show(response.data.message, "success");
            //     }
            // })
            .then(response => {
                this.setState({ loading: false });
                if (response.status == 200) {
                    this.props.history.push('/login');
                    notify.show(response.data.message, "success");
                }
                else if (response.status == 206) {
                    notify.show(response.data.message, "error");
                }
                else if (response.data.message == "Session Expired") {
                    notify.show(response.data.message, "error");
                }
            })
        // .catch(function (error) {
        //     console.log(error);
        // });
        // this.setState({ emailId: "" });
    }

    // toggleChangePwd(event) {
    //     this.setState({ isPwdChange: false })
    //     let data = JSON.parse(sessionStorage.getItem('verificationdata'));
    //     event.preventDefault();
    //     const payload = {
    //         emailId: data.emailId,
    //         token: data.token,
    //         password: this.state.password,
    //         confirmPassword: this.state.confirmPassword,
    //     }
    //     this.setState({ loading: true });
    //     const changePwdUrl = API_BASE_URL + "forgot/password/reset";
    //     axios.post(changePwdUrl, payload)
    //         .then(response => {
    //             this.setState({ loading: false });

    //             if (response.status == 200) {
    //                 this.props.history.push("/login");
    //                 notify.show(response.data.message, "success");
    //             }
    //             // if (response.status == Failure) {
    //             //     notify.show(response.data.message, "error");
    //             // }
    //             else if (response.data.message == 'Session Expired') {
    //                 this.props.history.push('/login');
    //                 notify.show(response.data.message, "error");
    //             }
    //         })
    //         .catch(function (error) {

    //         });
    //     this.setState({ password: "", confirmPassword: "" })
    // }

    render() {
        return (
            // <!---ForgetPassword-->
            <div className="aleef-signin">
                {this.state.loading && <div className='loaderBg'>
                    <div className='loaderimg'>
                        <ScaleLoader
                            size={180}
                            color={'#fff'}
                            loading={this.state.loading}
                        />
                    </div>
                </div>}
                <Notifications />
                <div className="aleef-signin-left">
                    <div className="aleef-logo">
                        <img src="src/public/image/main-logo.png" />
                    </div>
                </div>
                <div className="aleef-signin-right">
                    <div className="aleef-container">
                        <div className="aleef-signin-form">
                            <h1 className="text-center">Forgot Password</h1>
                            <form>
                                <div>
                                    <div className="form-group">
                                        <label>
                                            Email
                                    </label>
                                        <input type="text" name="emailId" value={this.state.emailId} onChange={this.handleChange} placeholder="Enter Your Email" />
                                        <div style={{ color: 'yellow' }}>{this.state.errors.emailId}</div>
                                    </div>
                                    <div className="form-group text-center">
                                        <NavLink className="clickhere" to='/login' >Click here to Login</NavLink>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="button" className="aleef-signin-btn" onClick={this.toggleForgetPwd} disabled={!this.state.formValid}>Send Mail</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* {this.state.isPwdChange && <div className='loaderBg loaderimg'>
                    <div className="modal resetmodal fade in" role="dialog" aria-hidden="true" style={{ display: "block" }}>
                        <div className="modal-dialog dialogMod">
                            <div className="modal-content">
                                <div class="modal-header">
                                    <button type="button" className="closeBg" data-dismiss="modal">&#x2716;</button>
                                    <h4 class="modal-title">Reset Password</h4>
                                </div>

                                <div className="modal-body bodyMod">
                                    <form>
                                        <input type="password" className="form-control" placeholder="New Password" name="password" value={this.state.password} onChange={this.handleChangePwd} />
                                        <input type="password" className="form-control" placeholder="Confirm New Password " name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangePwd} />
                                    </form>
                                    <button type="submit" className="btn-verfy" onClick={this.toggleChangePwd} disabled={this.state.password === "" || this.state.confirmPassword === ""}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>} */}
            </div>
        )
    }
}
export default ForgetPassword;