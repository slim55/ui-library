import React, { type FC, type PropsWithChildren } from 'react'
import { ColorEnum } from '../../models/stylesEnums'
import styled, { css, type RuleSet } from 'styled-components'

interface StyledButtonPropsType {
  $fullwidth?: boolean
  $color?: 'primary' | 'secondary'
  $type?: 'contained' | 'outlined'
  onClick?: () => void
}

type PropsType = PropsWithChildren & {
  fullwidth?: StyledButtonPropsType['$fullwidth']
  color?: StyledButtonPropsType['$color']
  type?: StyledButtonPropsType['$type']
  onClick?: StyledButtonPropsType['onClick']
}

const getBackgroundColor = ({ $color: color, $type: type }: StyledButtonPropsType): RuleSet<object> => {
  let bg = ColorEnum.primary
  if (type === 'outlined') {
    bg = ColorEnum.white
  } else if (type === 'contained' && color === 'secondary') {
    bg = ColorEnum.secondary
  }
  return css`background-color: ${bg};`
}

const getColor = ({ $color: color, $type: type }: StyledButtonPropsType): RuleSet<object> => {
  let textColor = ColorEnum.white
  if (type === 'outlined' || color === 'secondary') {
    textColor = ColorEnum.primary
  }
  return css`color: ${textColor};`
}

const getBorder = ({ $color: color, $type: type }: StyledButtonPropsType): RuleSet<object> => {
  let borderColor = ColorEnum.primary
  if (type === 'outlined') {
    borderColor = color === 'primary' ? ColorEnum.primary : ColorEnum.borderSecondary
  } else if (type === 'contained' && color === 'secondary') {
    borderColor = ColorEnum.borderSecondary
  }
  return css`border: 1px solid ${borderColor};`
}

const StyledButton = styled.button<StyledButtonPropsType>`
  align-items: center;
  justify-content: center;
  ${props => getBackgroundColor(props)}
  border-radius: 3px;
  ${props => getColor(props)}
  padding: 20px 32px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  ${props => getBorder(props)}
  cursor: pointer;
  ${props => props.$fullwidth === true
? css`
    display: flex;
    width: 100%;
  `
: css`
    display: inline-flex;
  `}
`

const Button: FC<PropsType> = ({ children, ...props }) => {
  const {
    color = 'primary',
    type = 'contained',
    fullwidth = false,
    onClick
  } = props
  return (
    <StyledButton
      $color={ color }
      $type={ type }
      $fullwidth={ fullwidth }
      onClick={ onClick }
      data-testid="button"
    >{children}</StyledButton>
  )
}

export default Button
