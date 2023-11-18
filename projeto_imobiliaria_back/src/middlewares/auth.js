import jwt from "jsonwebtoken";

export default function auth(request, response, next) {
    const { authorization } = request.headers;

    if (!authorization) {
        response.json({ message: "Não autorizado" }, 401)
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, '202cb962ac59075b964b07152d234b70');
        const { id } = data;
        request.userId =  id;

        return next();

    } catch (error) {
        response.json({ message: "Não autorizado" }, 401)
    }
}