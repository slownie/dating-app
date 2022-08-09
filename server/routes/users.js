const express = require('express');
const router = express.Router();
const {signupUser, loginUser} = require('../controllers/userController');


// Sign up to the Database
// router.post('/', async(req,res) => {
//     const {email, password} = req.body;
//     const generatedID = uuidv4();
//     const hashPassword = await bcrypt.hash(password, 10);
// });

router.post('/signup', signupUser);

router.post('/login', loginUser);

// // GET all users
// router.get('/', (req,res) => {
//     res.json({mssg: 'GET all users'});
// });

// // GET a single user
// router.get('/:id', (req,res) => {
//     req.body;
//     res.json({mssg: 'GET a single user'});
// });

// // POST/CREATE a new user
// router.post('/', async (req,res) => {
//     const {first_name, email, password} = req.body

//     try {
//         const user = await User.create({first_name, email, password});
//         res.status(200).json({user});
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// });

// // DELETE a user
// router.delete('/:id', (req,res) => {
//     res.json({mssg: 'DELETE a single user'});
// });

// // PATCH/UPDATE a user
// router.patch('/:id', (req,res) => {
//     res.json({mssg: 'PATCH a single user'});
// })

module.exports = router;