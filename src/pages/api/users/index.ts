import {NextApiRequest , NextApiResponse} from 'next';    

// eslint-disable-next-line import/no-anonymous-default-export
export default (request:NextApiRequest , response:NextApiResponse) =>{
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ];
    
    return response.json(users);
}
