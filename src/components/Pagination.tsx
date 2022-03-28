import { LeftArrow, RightArrow } from "./ArrowsSvg";

interface PropsPagination {
  page: number;
  totalPages: number;
  onLeftClick: () => void;
  onRightClick: () => void; 
}

export const Pagination = ({ onLeftClick, onRightClick, page, totalPages }: PropsPagination) => {

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};