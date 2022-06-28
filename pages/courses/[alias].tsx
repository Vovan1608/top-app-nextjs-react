import React from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

import { withLayout } from '../../layout/Layout';
import { IMenuItem } from '../../interfaces/menu.interface';

function Course({ menu }: ICourseProps): JSX.Element {
    return (
        <>

        </>
    );
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<ICourseProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.get<ICourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu');
    const { data: page } = await axios.get<ICourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/byAlias');

    return {
        props: {
            menu,
            firstCategory
        }
    };
}

interface ICourseProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}
