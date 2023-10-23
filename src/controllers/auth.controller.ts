import { Request, Response } from 'express';
import { generateToken } from '../utils/auth.utils';

export const createUser = (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Create user'
      #swagger.description = 'Create an account for a user'
      #swagger.parameters['email'] = {
          in: 'body',
          description: 'User email',
          required: true,
          type: 'string',
          schema: {
            email: "user@email.com"
          }
      }
      #swagger.responses[201] = {
        description: 'The user was created successfully',
        schema: {
          token: "usertoken"
        }
      }
      #swagger.responses[400] = {
        description: 'Content-Type must be application/json',
        schema: {
          error: 'Content-Type must be application/json'
        }
      }
      #swagger.responses[400] = {
        description: 'Email is not valid or empty',
        schema: {
          error: 'Email is not valid or empty'
        }
      }
    */

    try {
        if (req.headers['content-type'] !== 'application/json')
            res.status(400).json({ "error": "Content-Type must be application/json" });
        const { email } = req.body;
        const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (!regex.test(email) || email === undefined || email === null || email === "")
            res.status(400).json({ "error": "Email is not valid or empty" });
        generateToken(email)
            .then((token) => res.status(201).json(token))
            .catch((err) => res.status(400).json({ "error": err.message }));
    } catch (err) {
        res.status(500).json({ "error": err });
    }
};
