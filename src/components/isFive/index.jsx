import { useMemo, memo } from 'react';

const IsFive = memo(({ value }) => {

    const getResult = useMemo(() => {
        let i = 0;
        while(i < 600000000) {
            i++;
        };

        return value === 5 ? "It's five :)" : "It's not five :(";
    }, [value])

    return (
        <span>{getResult}</span>
    );
}, (prevProps, nextProps) => {
    return nextProps.value !== 5;
})

export default IsFive;