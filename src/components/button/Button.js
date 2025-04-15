import "./button.scss";

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button class={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
    {...otherProps}
    >{children}</button>
  )
}

export default Button
