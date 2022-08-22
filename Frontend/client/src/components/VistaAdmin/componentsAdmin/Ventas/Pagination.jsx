export default function Pagination({paginated, order2, orderPerPage, currentPage}){

    let pageNumber = []

    for(let i = 1; i < Math.ceil(order2 / orderPerPage); i++) {
            pageNumber.push(i)
        }

    return (
    <div >
        <nav>
            <ul className="flex justify-center pt-6">
            { currentPage > 1 ? (
                <li onClick={() => paginated(currentPage - 1)}>
                    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                </li>
            ) : null}
                <li className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => paginated(currentPage)}>
                    {currentPage}
                </li>
            { currentPage < order2 / orderPerPage ? (
                <li onClick={() => paginated(currentPage + 1)}>
                    <button className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
            ) : null}
            </ul>
        </nav>
    </div>
    )
}