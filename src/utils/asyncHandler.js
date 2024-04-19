const asyncHandler = (requestHandler) => {
    return (error,req, res, next) => {
        Promise.resolve(requestHandler(error,res, req, next)).catch((err) => next(err))
    }
}

export { asyncHandler }



// another way
// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>{()=>{}}
// const asyncHandler = (func)=>{async()=>{}}
// const asyncHandler = (func)=> async()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }