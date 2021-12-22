/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register new user
 *     tags:
 *       - User
 *     parameters:
 *       - name: User informations
 *         required: true
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *            firstname:
 *              type: string
 *              required: true
 *              example: 'myFirstname'
 *            lastname:
 *              type: string
 *              required: true
 *              example: 'myLastname'
 *            username:
 *              type: string
 *              required: true
 *              example: 'admin'
 *            password:
 *              type: string
 *              required: true
 *              example: p@sswordX20
 *            role:
 *              type: string
 *              required: true
 *              example: 'Admin|User'
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad request
 *         schema :
 *           type: object
 *           properties:
 *             errors:
 *               type: object
 *               properties:
 *                 field_name:
 *                   type: string
 *               example: {'firstname' : ['required_field', 'expected_string'], 'lastname':['required_field', 'expected_string'], 'username':['required_field', 'expected_string','existing_username'], 'role':['required_field', 'expected_string', 'invalid_role']}
 *       500:
 *         description: Server error
 *         schema :
 *           type: object
 *           properties:
 *             errors:
 *               type: string
 *               example: internal_error
 */