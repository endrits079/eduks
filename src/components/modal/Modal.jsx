import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/reducers/actions";
function Modal(props) {
  return (
    <div className={`modal ${props.showModal && "d-block"}`}>
      <div
        className="modal-close"
        onClick={() => {
          props.toggleModal(false);
        }}
      >
        <span></span>
      </div>
      <div className="modal-body">{props.children}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (showModal) => dispatch({ type: actionTypes.SHOW_MODAL, showModal }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
