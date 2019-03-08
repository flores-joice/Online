import React from "react";

export function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      className={props.classes}
    >
      {props.children}
    </button>
  );
}

export function Input(props) {
  return (
    <div className="input-group mb-3 d-flex" key={props.key}>
      <div className="input-group-prepend">
        <label
          id={props.idLabel}
          className="input-group-text "
          htmlFor={props.htmlForLabel}
        >
          {props.children}
        </label>
      </div>
      <input
        value={props.value}
        type={props.typeInput}
        className="form-control"
        required={props.requiredInput}
        placeholder={props.placeholderInput}
        onChange={props.changeUser}
        name={props.name}
      />
    </div>
  );
}