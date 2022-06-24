import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IRaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isAditable?: boolean;
    raiting: number;
    setRaiting?: (raiting: number) => void;
}
