import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { IFirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.COURSES },
    { route: 'services', name: 'Services', icon: <ServicesIcon />, id: TopLevelCategory.SERVICES },
    { route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.BOOKS },
    { route: 'products', name: 'Products', icon: <ProductsIcon />, id: TopLevelCategory.PRODUCTS },
];
