import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.js';

const authMiddlewares = (request, response, next) => {
  const authtoken = request.headers.authorization;

  if (!authtoken) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const token = authtoken.split(' ')[1];

  try {
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      if (error) {
        throw Error();
      }

      request.userId = decoded.id;
      request.userIsAdmin = decoded.admin;
      request.userName = decoded.name;
    });
  } catch (_error) {
    return response.status(401).json({ error: 'Token is invalid' });
  }

  return next();
};

export default authMiddlewares;
