import _ from "lodash";
import React from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, (field) => {
      return (
        <Field
          key={field.name}
          component={SurveyField}
          type="text"
          name={field.name}
          label={field.label}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            type="submit"
            className="teal btn-flat right white-text
          "
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
