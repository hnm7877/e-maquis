import { FormSelect, Pagination } from 'react-bootstrap';

export const TablePagination = ({
  page,
  rowsPerPage,
  setRowsPerPage,
  setPage,
  nbPages,
  total,
}: {
  page: number;
  setPage: (page: number) => void;
  nbPages: number;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  total: number;
}) => {
  return (
    <div className='table-bilan__pagination'>
      <FormSelect
        className='table-bilan__form-select'
        value={rowsPerPage}
        onChange={(e) => {
          setRowsPerPage(Number(e.target.value));
          setPage(1);
        }}
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </FormSelect>

      {rowsPerPage < total && (
        <Pagination>
          <Pagination.First onClick={() => setPage(1)} />
          <Pagination.Prev
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          />
          {/* {page > 1 && (
          <Pagination.Item onClick={() => setPage(page - 1)}>
            {page - 1}
          </Pagination.Item>
        )} */}
          {new Array(nbPages).fill(0).map((_, i) => (
            <Pagination.Item
              key={i}
              active={i + 1 === page}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}

          {/* {page < nbPages && (
          <Pagination.Item onClick={() => setPage(page + 1)}>
            {page + 1}
          </Pagination.Item>
        )} */}
          <Pagination.Next
            onClick={() => setPage(page + 1)}
            disabled={page === nbPages}
          />
          <Pagination.Last onClick={() => setPage(nbPages)} />
        </Pagination>
      )}
    </div>
  );
};
