

export const responseSuccess = (metaData = null, status = 'Success', message = 'Ok', code = 200) => {

    return {
        status: 'success',
        code: code,
        message: message,
        metaData: metaData, 
        doc: 'api.domain.com/doc' 


    }

};

export const responseError = (message ='Internal Server Error', code = 500, stack = null) => {
    return {

        status:'Error' ,
        code: code,
        message : message,
        stack: stack
    }

}

