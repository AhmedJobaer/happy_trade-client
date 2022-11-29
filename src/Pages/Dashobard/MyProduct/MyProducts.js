import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email)

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`http://localhost:5000/myProducts/${user.email}`)
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(myProducts);
    return (
        <div>
            <h2>My product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {
                        myProducts.map((user, id) => <tbody key={user._id}>

                            <tr>
                                <th>{id + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.type}</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyProducts;