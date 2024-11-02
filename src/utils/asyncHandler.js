const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }



// another way
// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>{()=>{}}
// const asyncHandler = (func)=>{async()=>{}}
// const asyncHandler = (func)=> async()=>{}

// const asyncHandler = (fn) => async (err,req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.status || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }