import { RequestHandler } from 'express';
import status from 'http-status';

const notFound: RequestHandler = (req, res, next) => {
    res.status(status.NOT_FOUND).send({
        success: false,
        message: 'API Not found!!',
        error:[
            {
                message:"API Not found!!",
                path:"route"
            }
        ]
    });
};

export default notFound;
