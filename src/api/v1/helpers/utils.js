const isValidEmail = (email) =>{
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
const resOk = (res, data = null, mess = 'Ok') =>{
    res.status(200).json({
        status: 200,
        message: mess,
        data: data
    });
}


const resErr = (res, status = 500, mess = 'Internal Server Error') => {
  res.status(status).json({
    status,
    message: mess,
    data: null
  });
};

module.exports = {
    isValidEmail,
    resOk,
    resErr
}