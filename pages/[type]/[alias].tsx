import React from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import { withLayout } from '../../layout/Layout';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers/helpers';

const firstCategory = 0;

function Course({ menu, page }: ICourseProps): JSX.Element {
    return (
        <>
            Abra
        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu');

    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    const { data: menu } = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu');
    const { data: page } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/byAlias' + params.alias);

    return {
        props: {
            menu,
            page,
            firstCategory
        }
    };
};

interface ICourseProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
    page: ITopPageModel;
}
