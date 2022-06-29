import cn from 'classnames';
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';


import styles from './Menu.module.css';
import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';
import { AppContext } from '../../conext/app.context';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';

const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.COURSES },
    { route: 'services', name: 'Services', icon: <ServicesIcon />, id: TopLevelCategory.SERVICES },
    { route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.BOOKS },
    { route: 'products', name: 'Products', icon: <ProductsIcon />, id: TopLevelCategory.PRODUCTS },
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }

            return m;
        }))
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div
                        key={m.route}
                    >
                        <Link href={`/${m.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id === firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    }

    const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpend]: m.isOpened
                            })}>
                                {buildTherdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        );
    }

    const buildTherdLevel = (pages: IPageItem[], route: string) => {
        return (
            pages.map(page => (
                <Link
                    href={`/${route}/${page.alias}`}
                    key={page.alias}
                >
                    <a
                        className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
                        })}
                    >
                        {page.category}
                    </a>
                </Link>
            ))
        );
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}