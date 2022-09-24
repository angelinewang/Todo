export function apikey(req,res,next) {
    if (req.headers['x-api-key'] && req.headers['x-api-key'] === 'testTESTtest') {
        next();
    } else {
        res.status(403).send({error: 'You need a valid x-api-key set.'});
    }
}