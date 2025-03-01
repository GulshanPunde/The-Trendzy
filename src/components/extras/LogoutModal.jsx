import React from "react";

const LogoutModal = ({ show, onConfirm, onCancel }) => {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{
        display: show ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add overlay effect
      }}
      aria-hidden={!show}
    > 
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "400px" }}
      >
        <div
          className="modal-content"
          style={{
            borderRadius: "10px",
            border: "none",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Modal Header */}
          <div
            className="modal-header"
            style={{
              backgroundColor: "#f8f9fa",
              borderBottom: "1px solid #e9ecef",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <h5 className="modal-title text-danger">
              <i className="bi bi-box-arrow-right me-2"></i>Confirm Logout
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
              aria-label="Close"
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body text-center">
            <p className="mb-4" style={{ fontSize: "16px", color: "#333" }}>
              Are you sure you want to log out?
            </p>
          </div>

          {/* Modal Footer */}
          <div
            className="modal-footer justify-content-between"
            style={{
              borderTop: "1px solid #e9ecef",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <button
              type="button"
              className="btn btn-outline-secondary px-4"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger px-4"
              onClick={onConfirm}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
