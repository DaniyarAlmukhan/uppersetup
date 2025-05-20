import React, { FC } from 'react'
import classes from './styles.module.scss'

interface IProps {
  width?: string;
  height?: string;
}

const Skeleton: FC<IProps> = ({
  width = '200px',
  height = '300px',
}) => {
  return (
    <div
      className={classes.skeleton}
      style={{
        width,
        height,
      }}
    />
  )
}

export default Skeleton