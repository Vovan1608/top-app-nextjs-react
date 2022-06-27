import cn from 'classnames';
import { format } from 'date-fns';

import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
    return (
        <footer
            className={cn(className, styles.footer)}
            {...props}
        >
            <div>
                OwlTop &#169; 2020 - {format(new Date(), 'yyyy')} All Righs Reserved
            </div>
            <a href="#" target="_blank">Terms of use</a>
            <a href="#" target="_blank">Privacy policy</a>
        </footer>
    );
}
