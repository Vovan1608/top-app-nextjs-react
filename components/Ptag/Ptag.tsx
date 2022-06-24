import cn from 'classnames';

import { IParagraphProps } from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({ children, fontSize = 'md', className, ...props }: IParagraphProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, className, {
            [styles.sm]: fontSize === 'sm',
            [styles.md]: fontSize === 'md',
            [styles.lg]: fontSize === 'lg'
        })}
            {...props}
        >
            {children}
        </p>
    );
}
