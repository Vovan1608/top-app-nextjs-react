import { useEffect, useState } from 'react';

import cn from 'classnames';

import { IRaitingProps } from './Raiting.props';
import StarIcon from './star.svg';
import styles from './Raiting.module.css';


export const Raiting = ({ isAditable = false, raiting, setRaiting, className, ...props }: IRaitingProps): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaiting: number): void => {
        const updatedArray = raitingArray.map((el: JSX.Element, i: number) => {
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: i < currentRaiting
                })} />
            );
        });

        setRaitingArray(updatedArray);
    }

    return (
        <div {...props}>
            {raitingArray.map((el, i) => (
                <span key={i}>{el}</span>
            ))}
        </div>
    );
}
