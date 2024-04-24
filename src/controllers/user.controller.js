import {asyncHandler} from '../middlewares/asyncHandler.js';



const regesterUser = asyncHandler(async (req, res) => {
 
 return res.status(200).json({
 message : "ok"
    
  });
});



export {regesterUser};