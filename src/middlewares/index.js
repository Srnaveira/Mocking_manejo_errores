import EErrors from "../services/enumErrores.js"


export default (error, req, res, next) => {
    console.log(error.cause)

    switch(error.code){
        case EErrors.ROUTING_ERROR:
            res.send({status: "error", error: error.name})
            break;

        case EErrors.DATABASE_ERROR:
            res.send({status: "error", error: error.name})
            break;

        case EErrors.INVALID_TYPE_ERROR:
            res.send({status: "error", error: error.name})
            break;
        
        default:
            res.send({status: "error", error: "Error no manejado"})
    }
}