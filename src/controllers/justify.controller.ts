import { Request, Response } from 'express';
import { checkToken } from '../utils/auth.utils';
import { justifyText } from '../utils/justify.utils';
import connect_db from '../config/db';

export const justifyContent = async (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Justify text in 80 columns'
      #swagger.description = 'Justify text in 80 columns and update user quota'
      #swagger.raw = true
      #swagger.consumes = ['text/plain']
      #swagger.produces = ['text/plain']
      #swagger.parameters['text'] = {
        in: 'body',
        description: 'Text to justify',
        required: true,
        type: 'string'
      }
      #swagger.responses[200] = {
        description: 'Text justified'
      }
      #swagger.responses[400] = {
        description: 'Text is not valid or empty',
        schema: {
          error: 'Text is required'
        }
      }
      #swagger.responses[400] = {
          description: 'Content-Type must be text/plain',
          schema: {
            error: 'Content-Type must be text/plain'
          }
      }
      #swagger.responses[401] = {
        description: 'Token is invalid',
          schema: {
            error: 'Token is invalid'
          }
      }
      #swagger.responses[401] = {
        description: 'Token is required',
          schema: {
            error: 'Token is required'
          }
      }
      #swagger.responses[402] = {
        description: 'Payment Required',
          schema: {
            error: 'Payment Required'
          }
      }
    */

    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ "error": "Token is required" });

    const user = await checkToken(token);
    if (!user)
        return res.status(401).json({ "error": "Token is invalid" });
    if (req.headers['content-type'] !== 'text/plain')
        return res.status(400).json({ "error": "Content-Type must be text/plain" });

    const text = req.body;
    if (!text || text === '')
        return res.status(400).json({"error": "Text is required "});

    const justifiedText = justifyText(text);
    const length = justifiedText.split(/\s+/).length;
    if (user.quota - length < 0)
        return res.status(402).json({ "error": "Payment Required" });

    const { db } = await connect_db();
    await db.collection("users").updateOne({ email: user.email }, { $set: { quota: user.quota - length } });
    return res.status(200).send(justifiedText);
};
