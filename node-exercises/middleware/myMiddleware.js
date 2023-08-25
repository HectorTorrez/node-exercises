
export let banName = ''
export const loggin = ((req, res, next) => {
    console.log('Method', req.method)
    console.log('Url', req.url)
    next()
})

export const bandNameGenerator = ((req, res, next) => {
    banName = req.body['band'] + req.body['peetName']
    next()
})