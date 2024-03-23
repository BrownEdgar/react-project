
import { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate'

function App() {

  const [items, setItems] = useState([])
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/comments?_page=1&_limit=15'
      );
      const data = await res.json();
      setItems(data)
    }

    getComments()
  }, [])

  const fetchComments = async (currentpage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentpage}&_limit=15`
    );
    const data = await res.json();
    const total = res.headers.get('x-total-count');

    setPageCount(total / 15)
    return data;
  };

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1
    const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer);
  };


  return (
    <div className='container'>

      <div className='row m-2'>


        {items.map((item) => {
          return <div key={item.id} className="col-sm-6 col-md-4 v my-2">
            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
              <div className="card-body">
                <h5 className="card-title text-center h2">id:{item.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">{item.email}</h6>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          </div>
        })

        }
      </div>



      <ReactPaginate
        previousLabel='previous'
        nextLabel={'next'}
        breakLabel={'......'}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />


    </div>
  );
}

export default App;
