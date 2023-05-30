import {memo} from "react";

const Count = memo(({ value, id }) => {
    return (
        <div className='count'>
            <p>{value}</p>
        </div>
    );
})

export default Count;