import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const sucessMSG = (msg) => {
  toast.success(msg);
};

export const informationMSG = (msg) => {
  toast.info(msg);
};

export const errorMSG = (msg) => {
  toast.error(msg);
};
export const Toast = () => (
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
