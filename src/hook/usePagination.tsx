import { useState } from 'react';
import {
  UsePaginationExportsInterface,
  UsePaginationProps,
} from '@/src/interfaces';

const usePagination = ({
  total,
  initialPage,
  handlePageChange,
}: UsePaginationProps): UsePaginationExportsInterface => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageGroup, setPageGroup] = useState<number>(0); // Control which group of pages you're on

  const pagesPerGroup: number = 4;
  const lastPageGroup: number = Math.floor((total - 1) / pagesPerGroup); //last page group

  const handlePagePress = (page: number) => {
    setCurrentPage(page);
    handlePageChange(page);
  };

  const handleNextGroup = () => {
    const newPageGroup: number = pageGroup + 1;
    const newFirstPageOfGroup: number = newPageGroup * pagesPerGroup + 1;
    setPageGroup(newPageGroup);
    setCurrentPage(newFirstPageOfGroup); // Select the first page of the new group
    handlePageChange(newFirstPageOfGroup); // Notify the page change
  };

  const handlePreviousGroup = () => {
    const newPageGroup: number = pageGroup - 1;
    const newFirstPageOfGroup: number = newPageGroup * pagesPerGroup + 1;
    setPageGroup(newPageGroup);
    setCurrentPage(newFirstPageOfGroup); // Select the first page of the previous group
    handlePageChange(newFirstPageOfGroup); // Notify the page change
  };

  const handleFirstPagePress = () => {
    setCurrentPage(1);
    setPageGroup(0); // Move to the first page group
  };

  const handleLastPagePress = () => {
    setCurrentPage(total);
    setPageGroup(lastPageGroup); // move to last page group
  };

  return {
    currentPage,
    pageGroup,
    pagesPerGroup,
    handlePagePress,
    handleNextGroup,
    handlePreviousGroup,
    handleFirstPagePress,
    handleLastPagePress,
  };
};

export default usePagination;
