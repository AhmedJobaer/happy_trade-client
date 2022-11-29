import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {

    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: () => fetch("http://localhost:5000/allUser")
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    //console.log(allUser);

    return (
        <div>
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
                        allUser.map(user => <tbody key={user._id}>

                            <tr>
                                <th>1</th>
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

export default AllUser;