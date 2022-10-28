import '../styles/Pagination.css'

function Pagination () {
    return (
        <div className="pagination">
            <button className='control'>Previous</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button className='control'>Next</button>
        </div>
    )
}

export default Pagination