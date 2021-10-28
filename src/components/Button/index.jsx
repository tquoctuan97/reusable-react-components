import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Button.propTypes = {
  variant: PropTypes.oneOf(['', 'outline', 'text']),
  color: PropTypes.oneOf(['', 'primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['', 'sm', 'md', 'lg']),
  children: PropTypes.string.isRequired,
  startIcon: PropTypes.string,
  startEnd: PropTypes.string,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: '',
  color: '',
  size: '',
  startIcon: '',
  endIcon: '',
  disableShadow: '',
  disabled: '',
};

function Button(props) {
  let className = 'btn';

  className += props.variant && ` btn--${props.variant}`;
  className += props.color && ` btn--${props.color}`;
  className += props.size && ` btn--${props.size}`;
  className += props.disableShadow && ` btn--disable-shadow`;
  className += props.startIcon && ` btn--start-icon`;
  className += props.endIcon && ` btn--end-icon`;

  const renderIcon = <span className="material-icons">{props.startIcon || props.endIcon}</span>;

  return (
    <button className={className} disabled={props.disabled}>
      {props.startIcon && renderIcon}
      {props.children}
      {props.endIcon && renderIcon}
    </button>
  );
}

export default Button;
