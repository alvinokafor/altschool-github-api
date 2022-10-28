import '../styles/UserImage.css'

function UserImage ({userImg}) {
    return (
        <div className='user-img'>
            <img src={userImg} alt="user profile" />
        </div>
    )
}

export default UserImage;