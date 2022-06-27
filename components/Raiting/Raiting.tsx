import { useEffect, useState, KeyboardEvent } from 'react';

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
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRaiting,
                        [styles.editable]: isAditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(raiting)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isAditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isAditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });

        setRaitingArray(updatedArray);
    }

    const changeDisplay = (i: number) => {
        if (!isAditable) {
            return;
        }

        constructRaiting(i);
    }

    const onClick = (i: number) => {
        if (!isAditable || !setRaiting) {
            return;
        }

        setRaiting(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRaiting) {
            return;
        }

        setRaiting(i);
    }

    return (
        <div {...props}>
            {raitingArray.map((el, i) => (
                <span key={i}>{el}</span>
            ))}
        </div>
    );
}
