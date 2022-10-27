import '../styles/AccountInfo.css'

function AccountInfo () {
    return (
        <section className="account-info">
            <div className='repo'>
                <p>Repositories</p>
                <p>24</p>
            </div>

            <div className='followers'>
                <p>Followers</p>
                <p>5</p>
            </div>

            <div className='following'>
                <p>Following</p>
                <p>8</p>
            </div>
        </section>
    )
}

export default AccountInfo;