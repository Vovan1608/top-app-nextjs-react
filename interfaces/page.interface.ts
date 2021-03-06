export enum TopLevelCategory {
    COURSES,
    SERVICES,
    BOOKS,
    PRODUCTS
}

export interface ITopPageAdvantage {
    _id: string;
    title: string;
    description: string;
}

export interface IHhData {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
}

export interface ITopPageModel {
    [x: string]: any;
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages: ITopPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    _v: number;
    hh: IHhData;
}
