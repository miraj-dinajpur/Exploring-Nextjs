import React from 'react';

const UserDetailPage = async({params}) => {

    const {userId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();

    return (
        <div>
            <h2>User Detail Page</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetailPage;