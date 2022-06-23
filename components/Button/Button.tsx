import cn from 'classnames';

import { IButtonPrtops } from './Button.props';
import styles from './Button.module.css';

export const Button = ({ appearance, children, className, ...props }: IButtonPrtops): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost'
            })}
            {...props}
        >
            {children}
        </button>
    );
}
