import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { closeIcon } from '../../assets/images';
import './modal.css';

export default function Modal({ title, message }) {
  const error = useRouteError();

  return (
    <div className="modal-window">
      <div className="modal-title">{title}</div>
      {message && <div className="modal-message">{message}</div>}
      {error && <div className="modal-message">{error.message}</div>}
      <Link to="/">
        <input
          className="close-modal-icon"
          type="image"
          alt=""
          src={closeIcon}
        />
      </Link>
    </div>
  );
}
