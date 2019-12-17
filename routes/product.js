const express = require('express');
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo
} = require('../controllers/product');

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/product/:productId', read);
router.post(
    '/product/create/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    create
);

router.put(
    '/product/:productId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.delete(
    '/product/:productId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

router.get('/product', list);
router.get('/product/related/:productId', listRelated);
router.get('/product/categories', listCategories);
router.post('/product/by/search', listBySearch);
router.get('/product/photo/:productId', photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;