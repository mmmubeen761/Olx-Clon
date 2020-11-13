import React from 'react';
import Button from '@material-ui/core/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const LoadMore = () => {

    return (

        <>
            <Button variant="outlined" color="primary" className='my-5' id='LoadMoreBtn'>
                Load more
    </Button>
        </>
    )
}

export default LoadMore;