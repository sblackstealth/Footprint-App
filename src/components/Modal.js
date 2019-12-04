import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { convertUSD } from '../utilities';

import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.props.offsetData);
    if (this.props.offsetData.offset) {
      const { offset, rec_cost_in_usd_cents, transaction_cost_in_usd_cents, total_cost_in_usd_cents } = this.props.offsetData;

      return (
        <div>
          <ReactModal
            isOpen={this.props.isModalOpen}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            contentLabel="Example Modal"
            ariaHideApp={false}
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="Modal__close-div">
              <i onClick={this.props.openModal} className="lar la-times-circle Modal__close"></i>
            </div>
            <h2>Looks like you want to offset your carbon emissions, great! Below are the details of where your support is going.</h2>

            <h3>{offset.name}</h3>
            <div className="Modal__project">
              <div className="Modal__project-details">
                <p className="Modal__para">
                  This Project is located in
                <span className="Modal__important-info">
                    {` ${offset.city}, ${offset.province}`}
                  </span>, and focuses on
                <span className="Modal__important-info">
                    {` ${offset.offset_type}`}.
                  </span>
                </p>
                <p className="Modal__desc">{offset.technical_details}</p>
              </div>
              <div className="Modal__offset">
                <p>offset cost: {convertUSD(rec_cost_in_usd_cents)}</p>
                <p>fee: {convertUSD(transaction_cost_in_usd_cents)}</p>
              </div>
            </div>
                <div className="Modal__btns">
                  <button className="Modal__purchase" onClick={this.props.openModal}>Purchase offset: {convertUSD(total_cost_in_usd_cents)}</button>
                  <button className="Modal__cancel" onClick={this.props.openModal}>Cancel</button>
                </div>
          </ReactModal>
        </div>
      )
    }
    return '';
  }
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  offsetData: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
}


export default Modal;
