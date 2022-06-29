import { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../conext/app.context';
import styles from './Menu.module.css';


export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    return (
        <>
            <ul>
                {menu.map(item => (<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))}
            </ul>
        </>
    );
}
