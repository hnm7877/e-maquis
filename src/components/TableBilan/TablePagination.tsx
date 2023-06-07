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

          {new Array(nbPages).fill(0).map((_, i) => {
            const pageNumber = i + 1;
            if (
              pageNumber === 1 ||
              pageNumber === nbPages ||
              (pageNumber >= page - 1 && pageNumber <= page + 1) ||
              nbPages <= 10
            ) {
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === page}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }

            if (
              (pageNumber === page - 2 || pageNumber === page + 2) &&
              nbPages > 10
            ) {
              return <Pagination.Ellipsis key={pageNumber} />;
            }

            return null;
          })}

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
