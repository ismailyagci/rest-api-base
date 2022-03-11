import { verifyJwt } from 'utils';
import auth from './auth';
import images from './images';
import todos from './todos';
import profile from './profile';

export const createRoutes = (app) => {
    app.use("/api/auth", auth);
    app.use("/api/images", images);
    app.use("/api/todos", verifyJwt, todos);
    app.use("/api/profile", verifyJwt, profile);
};