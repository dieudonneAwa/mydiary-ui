import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { StyledProfile } from './styles';
import { FormProps } from '../auth/signIn/SignIn'
import { Diary } from '../../actions/interfaces';
import { createDiary } from '../../actions/diary';

interface DispatchProps extends FormProps {
  createDiary: (diary: Diary) => any;
}

interface StateProps {
  diary: Diary;
}

type IProps = StateProps & DispatchProps;

export class Profile extends Component<InjectedFormProps<Diary, IProps> & IProps> {
  renderInput = ({ input, textarea, placeholder, type }: any) => {
    return (
      <div className="form-input">
        <input {...input} placeholder={placeholder} type={type} />
      </div>
    );
  }

  renderTextarea = ({ textarea, placeholder }: any) => {
    return (
      <div className="form-input">
        <textarea {...textarea} placeholder={placeholder} />
      </div>
    );
  }

  onSubmit = (formValues: Diary) => {
    this.props.createDiary(formValues)
  }

  render() {
    return (
      <StyledProfile>
        <Link to="/">
          <div className="logo">MyDiary</div>
        </Link>
        <div className="header">
          Diary
        </div>
        <div className="content-section">
          <form>
            <Field type="text" name="title" component={this.renderInput} placeholder="Diary title..." />
            <Field name="description" col="" component={this.renderTextarea} placeholder="Diary title..." />
          </form>
        </div>
      </StyledProfile>
    )
  }
}


const validate = (formValues: Diary): Diary => {
  // @ts-ignore
  const errors: Diary = {};
  if (!formValues.title) {
    errors.title = 'You must provide a title';
  }
  if (!formValues.description) {
    errors.description = 'You must provide a description';
  }
  return errors;
}

const mapStateToProps = ({ diary: { diary } }) => ({
  diary,
});

const connectedComponent = reduxForm<{}, IProps>({
  form: 'diary',
  validate,
})(Profile);

export default connect<StateProps, DispatchProps>(mapStateToProps, { createDiary })(connectedComponent);
