import PropTypes from 'prop-types';

function User({name, surname, age, isLoggedIn, friends }) {
    return (
        <>
        <h1>
            {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapamadınız."}
        </h1>

        {friends.map((friend) => (
            <div key={friend.id}>{friend.name}</div>
        ))}
        </>
    );
}

export default User;