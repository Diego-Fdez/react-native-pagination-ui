import { PaginationColorsEnum, PaginationSizesEnum } from '@/enums';

// Hook usePagination Props
export interface UsePaginationProps {
  total: number;
  initialPage: number;
  handlePageChange: (page: number) => void;
}

// Hook usePagination Exports
export interface UsePaginationExportsInterface {
  currentPage: number;
  pageGroup: number;
  pagesPerGroup: number;
  handlePagePress: (page: number) => void;
  handleNextGroup: () => void;
  handlePreviousGroup: () => void;
  handleFirstPagePress: () => void;
  handleLastPagePress: () => void;
}

// Pagination Props
export interface PaginationViewProps extends UsePaginationProps {
  selectedItemColor?: PaginationColorsEnum;
  defaultItemColor?: PaginationColorsEnum;
  itemSizes?: PaginationSizesEnum;
  iconProps?: IconPropsInterface;
}

// Constants
export interface SizesInterface {
  sm: SizesPropsInterface;
  md: SizesPropsInterface;
  lg: SizesPropsInterface;
  xl: SizesPropsInterface;
}

export interface SizesPropsInterface {
  width: number;
  height: number;
  fontSize: number;
}

export interface ColorsInterface {
  primary: ColorsPropsInterface;
  secondary: ColorsPropsInterface;
  success: ColorsPropsInterface;
  danger: ColorsPropsInterface;
  warning: ColorsPropsInterface;
  info: ColorsPropsInterface;
  default: ColorsPropsInterface;
  light: ColorsPropsInterface;
}

export interface ColorsPropsInterface {
  text: string;
  background: string;
}

export interface IconPropsInterface {
  size?: number;
  color?: string;
}
