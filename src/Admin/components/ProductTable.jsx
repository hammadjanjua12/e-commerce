import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteProduct, findAllProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Card, CardHeader, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((store) => store);

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  React.useEffect(() => {
    const data = {
      category: selectedCategory,
      colors: [],
      size: [],
      pageNumber: 1,
      pageSize: 100,
      minPrice: 0,  // Ensure minPrice is provided or default to 0
      maxPrice: 0,  // Ensure maxPrice is provided or default to 0
      minDiscount: 0,
      sort: "price_low",
      stock: "" ,
    };
    dispatch(findAllProducts(data));
  }, [selectedCategory, products.deletedProduct]);

  return (
    <div className='p-5 '>
      <Card className='mt-2  '>
        <CardHeader title='All Products' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">
                  <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                    <InputLabel id="category-filter-label">Category</InputLabel>
                    <Select
                      labelId="category-filter-label"
                      id="category-filter"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      label="Category"
                    >
                      <MenuItem value="">All</MenuItem>
                      <p className="text-center text-white bg-black">Women</p>
                      <MenuItem value="women_dress">Dresses</MenuItem>
                      <p className="text-center text-white bg-black">Men</p>
                      <MenuItem value="shirt">Shirt</MenuItem>
                      {categories?.map((category) => (
                        <MenuItem key={category._id} value={category.name}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {products?.products?.content && // Check if products is defined
                products.products.content
                  .filter((item) => !selectedCategory || item?.category?.name === selectedCategory)
                  .map((item) => (
                  <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">
                      <Avatar src={item.imageUrl}></Avatar>
                    </TableCell>
                    <TableCell component="left" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell align="left">{item?.category?.name}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
                    <TableCell align="left">
                      <Button onClick={() => handleProductDelete(item._id)} variant="outlined">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductTable;
