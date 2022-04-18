const { body, validationResult } = require("express-validator");

const validateRegister=async(req,res,next)=>{
    await Promise.all([body("email").isEmail().isLength({max:32}).run(req),
    body("name").exists({checkFalsy:true,checkNull:true}).matches(/^[a-z A-ZáéíóúñÑ,.'´-]+$/).isLength({max:32}).run(req)]);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({
            error:errors.array(),
            message:"Datos inválidos"
        })
    };
    next();
};
const validateCode=async(req,res,next)=>{
    await body("code").isLength({min:6,max:6}).run(req);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({
            error:errors.array(),
            message:"Código inválido"
        })
    };
    next();
}
module.exports={validateRegister,validateCode}