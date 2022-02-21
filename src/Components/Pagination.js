
const Pagination = ({pagination,onPageChange}) =>{

    const {page,limit,totalRow} = pagination
    const totalPages = Math.ceil(totalRow/limit)
    const handlePageChange= (newPage) =>{
        if (onPageChange){
            onPageChange(newPage)
        }
    }

    return(
        <div>
            <button className='btn btn-primary me-2' disabled={page <= 1} onClick={( ) => handlePageChange(page -1)}>
                Prev
            </button>
            <button className='btn btn-primary' disabled={page >= totalPages} onClick={( ) => handlePageChange(page +1)}>
                Next
            </button>
        </div>
    )
}
export default Pagination
