/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Cookie from 'js-cookie';
import { BrowserRouter, Link, Redirect } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { StyledSignUp, AuthLayout, Loader } from '../styles';
import { connect } from 'react-redux';
import { signIn } from '../../../actions/auth';
import { User } from '../../../actions/interfaces';

interface StateProps {
  user: User;
  authError: string;
  isLoading: boolean;
}
interface DispatchProps {
  signIn: (user: User) => Function;
}
export interface FormProps {
  handleSubmit?: (onSubmit: (formValues: User) => void) => React.FormEventHandler;
}
type IProps = StateProps & DispatchProps & FormProps;

export class SignIn extends React.Component<InjectedFormProps<User, IProps> & IProps> {
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
        <input {...input} placeholder={placeholder} type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = async (formValues: User): Promise<void> => {
    await this.props.signIn(formValues)
      // @ts-ignore
      .then((res) => {
        if (res) {
          const { token } = res.data.data.user;
          Cookie.set('token', token, { expires: 7 });
          return <Redirect to="/" />
        }
      });
  }

  render() {
    return (
      <AuthLayout>
        <StyledSignUp>
          <BrowserRouter forceRefresh >
            <Link to="/">
              <div className="logo">MyDiary</div>
            </Link>
          </BrowserRouter>
          <div className="form-wrapper">
            <h3>Sign In</h3>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field type="email" name="email" component={this.renderInput} placeholder="Enter Email Address" />
              <Field type="password" name="password" component={this.renderInput} placeholder="Enter Password" />
              {this.props.authError && <div className="errors">{this.props.authError}</div>}
              <button type="submit">
                {this.props.isLoading && <div className="loader"><Loader width="1.5rem" /></div>}
                Sign In
              </button>
            </form>
            <p>New on myDiary? <Link to="/auth/sign_up">Sign Up</Link></p>
          </div>
        </StyledSignUp>
      </AuthLayout>
    );
  }
}

const validate = (formValues: User): User => {
  // @ts-ignore
  const errors: User = {};
  if (!formValues.email) {
    errors.email = 'You must provide an email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address';
  }
  if (!formValues.password) {
    errors.password = 'You must provide a password';
  }
  return errors;
}

const mapStateToProps = ({ auth: { user, authError, isLoading } }: any): StateProps => ({
  user, authError, isLoading,
});

const connectedSignUp = reduxForm<{}, IProps>({
  form: 'SignUp',
  validate,
})(SignIn);

export default connect<StateProps, DispatchProps>(mapStateToProps, { signIn })(connectedSignUp);
