import styles from './AuthButton.module.css';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  return (
    <button
      className={`${styles.container} ${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      {...buttonProps}
    ></button>
  );
};

export default AuthButton;
