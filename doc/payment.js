/**
 * @swagger
 * /payment/add:
 *   post:
 *     summary: Create new payment
 *     tags:
 *       - Payment
 *     parameters:
 *       - name: Payments parameters
 *         required: true
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *            amount:
 *              type: integer
 *              required: true
 *              example: 500
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
 *               example: {'amount' : ['required_field', 'expected_integer']}
 *       500:
 *         description: Server error
 *         schema :
 *           type: object
 *           properties:
 *             errors:
 *               type: string
 *               example: internal_error
 */