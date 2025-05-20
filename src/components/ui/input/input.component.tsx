import React, { FC } from 'react'
import classes from './styles.module.scss';
type IProps = {
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: FC<IProps> = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  leftIcon,
  rightIcon,
  ...rest
}) => {

  return (
    <div className={classes['input-wrapper']}>
      {leftIcon && <span className={classes['input-icon']}>{leftIcon}</span>}
      <input
        className={classes['custom-input']}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...rest}
      />
      {rightIcon && <span className={classes['input-icon']}>{rightIcon}</span>}
    </div>
  )
}

export default Input