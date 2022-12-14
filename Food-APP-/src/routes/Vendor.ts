import express from 'express';
import { adminRegister, SuperAdmin } from '../controller/adminController';
import { createFood, deleteFood, vendorLogin, VendorProfile } from '../controller/vendorController';
import { authVendor } from '../middleware/auth';

const router = express.Router();


router.post('/login', vendorLogin)

router.post('/create-food', authVendor, createFood)

router.get('/get-profile', authVendor, VendorProfile)

router.delete('/delete-food/:foodid', authVendor, deleteFood)


export default router;