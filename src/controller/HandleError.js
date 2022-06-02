const handleError = () => (err, req, res, next) => {
    console.log(
        `
/// ┌──────────────────────────────────────────────────────
/// │             APP ERROR LOG                            
/// │                                                      
/// │      ${err.stack}                                        
/// │                                                      
/// │                                                      
/// │                                                     
/// │      {                                  
/// │        message : ${err.message}                                              
/// │                                                      
/// │       }                                               
/// │                                                      
/// │                                                      
/// └──────────────────────────────────────────────────────
    `,
    );
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        message: err.message,
    });
};

export default handleError;
