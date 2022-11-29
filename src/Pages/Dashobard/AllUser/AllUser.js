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
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        allUser.map((user, id) => <tbody key={user._id}>

                            <tr>
                                <th>{id + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.type}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-xs btn-primary'>Make Admin</button></td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUser;