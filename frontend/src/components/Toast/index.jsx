/* eslint-disable class-methods-use-this */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Toast extends React.Component {
  sucessMSG(msg) {
    toast.success(msg);
  }

  informationMSG(msg) {
    toast.info(msg);
  }

  errorMSG(msg) {
    toast.error(msg);
  }

  render() {
    return (
      <>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          pauseOnHover
        />
      </>
    );
  }
}

export default Toast;
