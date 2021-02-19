import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import fromFields from "./formFields";
import { submitSurvey } from "../../actions";

const SurveyReview = (props) => {
  const reviewFields = _.map(fromFields, (field) => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div style={{ marginBottom: "5px" }}>
          {props.formValues[field.name]}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please Review and Confirm</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white text"
        onClick={props.onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => props.submitSurvey(props.formValues, props.history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyReview)
);
