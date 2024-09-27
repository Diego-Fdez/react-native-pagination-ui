import { TouchableOpacity, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { usePagination } from '../../hook';
import { PaginationViewProps } from '../../interfaces';
import { styles } from '../../styles/Pagination.styles';
import { colors, sizes } from '../../constants';
import { PaginationColorsEnum, PaginationSizesEnum } from '../../enums';

const Pagination = ({
  total,
  initialPage,
  handlePageChange,
  selectedItemColor = PaginationColorsEnum.primary,
  defaultItemColor = PaginationColorsEnum.default,
  itemSizes = PaginationSizesEnum.lg,
  iconProps = { size: 18, color: '#000' },
}: PaginationViewProps) => {
  const {
    currentPage,
    pageGroup,
    pagesPerGroup,
    handlePagePress,
    handleNextGroup,
    handlePreviousGroup,
    handleFirstPagePress,
    handleLastPagePress,
  } = usePagination({ total, initialPage, handlePageChange });

  const selectedItemBackgroundColor: string =
    colors[selectedItemColor].background;
  const defaultItemBackgroundColor: string =
    colors[defaultItemColor].background;
  const selectedItemTextColor: string = colors[selectedItemColor].text;
  const defaultItemTextColor: string = colors[defaultItemColor].text;

  const renderIcon = () => {
    return (
      <Entypo
        name='dots-three-horizontal'
        size={iconProps.size}
        color={iconProps.color}
      />
    );
  };

  const renderPages = () => {
    const startPage: number = pageGroup * pagesPerGroup + 1;
    const endPage: number = Math.min(startPage + pagesPerGroup - 1, total);

    const pages: React.ReactNode[] = [];
    for (let i: number = startPage; i <= endPage; i++) {
      pages.push(
        <TouchableOpacity
          key={i}
          onPress={() => handlePagePress(i)}
          style={[
            styles.itemButton,
            sizes[itemSizes],
            {
              backgroundColor:
                i === currentPage
                  ? selectedItemBackgroundColor
                  : defaultItemBackgroundColor,
            },
          ]}
        >
          <Text
            style={[
              styles.itemText,
              {
                fontSize: sizes[itemSizes].fontSize,
                color:
                  i === currentPage
                    ? selectedItemTextColor
                    : defaultItemTextColor,
              },
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    return pages;
  };

  return (
    <View style={styles.container}>
      {/* Button to go back to the previous group and show the first page */}
      {pageGroup > 0 && (
        <>
          <TouchableOpacity
            onPress={handleFirstPagePress} // Navigate to page 1 and the first group
            style={[
              styles.itemButton,
              sizes[itemSizes],
              {
                backgroundColor:
                  currentPage === 1
                    ? selectedItemBackgroundColor
                    : defaultItemBackgroundColor,
              },
            ]}
          >
            <Text
              style={[
                styles.itemText,
                {
                  fontSize: sizes[itemSizes].fontSize,
                  color:
                    currentPage === 1
                      ? selectedItemTextColor
                      : defaultItemTextColor,
                },
              ]}
            >
              1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePreviousGroup}>
            {renderIcon()}
          </TouchableOpacity>
        </>
      )}

      {/* Pages within the current group */}
      {renderPages()}

      {/* Ellipsis button and last page if we are not in the last group */}
      {total > (pageGroup + 1) * pagesPerGroup && (
        <>
          {/* Button to advance to the next group if there are more pages */}
          <TouchableOpacity onPress={handleNextGroup}>
            {renderIcon()}
          </TouchableOpacity>

          {/* Show last page */}
          {total > pagesPerGroup && (
            <TouchableOpacity
              onPress={handleLastPagePress} // Navigate to the last page and the last group
              style={[
                styles.itemButton,
                sizes[itemSizes],
                {
                  backgroundColor:
                    currentPage === total
                      ? selectedItemBackgroundColor
                      : defaultItemBackgroundColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.itemText,
                  {
                    fontSize: sizes[itemSizes].fontSize,
                    color:
                      currentPage === total
                        ? selectedItemTextColor
                        : defaultItemTextColor,
                  },
                ]}
              >
                {total}
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}

      {/* If you're in the last group, show only the last page */}
      {total > pagesPerGroup &&
        total <= (pageGroup + 1) * pagesPerGroup &&
        currentPage < total && (
          <TouchableOpacity
            onPress={handleLastPagePress} // Navigate to the last page and the last group
            style={[
              styles.itemButton,
              sizes[itemSizes],
              {
                backgroundColor:
                  currentPage === total
                    ? selectedItemBackgroundColor
                    : defaultItemBackgroundColor,
              },
            ]}
          >
            <Text
              style={[
                styles.itemText,
                {
                  fontSize: sizes[itemSizes].fontSize,
                  color:
                    currentPage === total
                      ? selectedItemTextColor
                      : defaultItemTextColor,
                },
              ]}
            >
              {total}
            </Text>
          </TouchableOpacity>
        )}
    </View>
  );
};

export default Pagination;
