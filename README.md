# Pagination Component for React Native

A customizable pagination component for React Native that supports page grouping and custom styling. Ideal for projects that need intuitive navigation across multiple pages.

## Installation

You can install the component via npm:

```bash
npm install react-native-pagination-ui
```

## Usage

Import the `Pagination` component and use it in your React Native project:

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import Pagination from 'react-native-pagination-ui';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add your logic for handling page change
  };

  return (
    <View>
      <Pagination
        total={20}
        initialPage={currentPage}
        handlePageChange={handlePageChange}
        selectedItemColor='primary'
        defaultItemColor='default'
        itemSizes='lg'
      />
    </View>
  );
};

export default App;
```

![Logo](assets/pagination.png)

## Props

| Prop                | Type                     | Default                       | Description                                                       |
| ------------------- | ------------------------ | ----------------------------- | ----------------------------------------------------------------- |
| `total`             | `number`                 | **Required**                  | The total number of pages.                                        |
| `initialPage`       | `number`                 | **Required**                  | The initial page to display.                                      |
| `handlePageChange`  | `(page: number) => void` | **Required**                  | Callback function triggered when the page is changed.             |
| `selectedItemColor` | `PaginationColorsEnum`   | `primary`                     | The color for the selected page.                                  |
| `defaultItemColor`  | `PaginationColorsEnum`   | `default`                     | The color for the unselected pages.                               |
| `itemSizes`         | `PaginationSizesEnum`    | `lg`                          | Size of the pagination items (small, medium, large, extra-large). |
| `iconProps`         | `IconPropsInterface`     | `{ size: 18, color: '#000' }` | Properties for the pagination icons (ellipses).                   |

---

## Customization

### Sizes

You can customize the size of the pagination buttons using the `itemSizes` prop. Available sizes:

- `sm`: Small
- `md`: Medium
- `lg`: Large (default)
- `xl`: Extra-large

### Colors

Choose from predefined colors by using the `selectedItemColor` and `defaultItemColor` props:

- `primary`: Blue
- `secondary`: Purple
- `success`: Green
- `danger`: Red
- `warning`: Orange
- `info`: Cyan
- `default`: Grey
- `light`: White

### Icon Props

You can pass custom properties to the icon using the `iconProps` prop, such as:

```js
iconProps={{ size: 20, color: '#FF0000' }}
```

## Example

```tsx
<Pagination
  total={50}
  initialPage={1}
  handlePageChange={(page) => console.log('Current Page:', page)}
  selectedItemColor='success'
  defaultItemColor='light'
  itemSizes='md'
  iconProps={{ size: 16, color: '#123456' }}
/>
```

## License

This project is licensed under the MIT License.
