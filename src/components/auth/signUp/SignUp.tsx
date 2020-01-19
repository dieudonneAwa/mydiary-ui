/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyledSignUp } from '../styles';
import { BrowserRouter, Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../../../actions/auth';
import { User } from '../../../actions/interfaces';

interface StateProps {
  user: User;
}
interface DispatchProps {
  signUp: (user: User) => Function;
}
interface FormProps {
  handleSubmit: (onSubmit: (formValues: User) => void) => React.FormEventHandler;
}
type Props = StateProps & DispatchProps & FormProps;

export class SignUp extends React.Component<InjectedFormProps<User, Props> & Props> {
  renderError = ({ error, touched }: { error: User; touched: boolean }) => {
    if (touched && error) {
      return (
        <div className="errors">{error}</div>
      );
    }
    return null;
  }

  // @ts-ignore
  renderInput = ({ input, placeholder, type, meta }: any) => {
    return (
      <div className="form-input">
        <input {...input} placeholder={placeholder} type={type}/>
        {this.renderError(meta)}
      </div>
    );
  }
  
  onSubmit = async (formValues: User): Promise<void> => {
    await this.props.signUp(formValues);
  }
  
  render() {
    return (
      <StyledSignUp>
        <BrowserRouter forceRefresh >
          <Link to="/">
            <div className="logo">MyDiary</div>
          </Link>
        </BrowserRouter>
        <div className="form-wrapper">
          <h3>Register</h3>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field type="text" name="name" component={this.renderInput} placeholder="Enter Full Name"/>
              <Field type="email" name="email" component={this.renderInput} placeholder="Enter Email Address"/>
              <Field type="password" name="password" component={this.renderInput} placeholder="Enter Password"/>
              <Field type="password" name="confPassword" placeholder="Confirm Password" component={this.renderInput}/>
            <input type="submit" value="Sign Up"/>
          </form>
          <p>Have an account already? <Link to="/auth/sign_in">Sign In</Link></p>
        </div>
      </StyledSignUp>
    );
  }
}

const validate = (formValues: User): User => {
  // @ts-ignore
  const errors: User = {};
  if (!formValues.name) {
    errors.name = 'You must provide a name';
  }
  if (!formValues.email) {
    errors.email = 'You must provide an email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address';
  }
  if (!formValues.password) {
    errors.password = 'You must provide a password';
  }
  if (formValues.confPassword !== formValues.password) {
    errors.confPassword = 'Passwords do not match';
  }
  return errors;
}

const mapStateToProps = ({ auth: { user }}: any): StateProps => ({
  user,
});

const connectedSignUp = reduxForm<{}, User, string>({
  form: 'SignUp',
  validate,
  // @ts-ignore
})(SignUp);

export default connect<StateProps, DispatchProps>(mapStateToProps, { signUp })(connectedSignUp);
