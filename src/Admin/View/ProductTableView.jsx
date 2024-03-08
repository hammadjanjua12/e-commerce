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
import { Avatar, Button, Card, CardHeader } from '@mui/material';

const ProductTable = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(store=>store)
  



  // console.log("Admin Side products -----",products)

  
React.useEffect(()=>{
    const data = {
      category: "",
      colors: [] ,
      size: [],
      minPrice: 0,  // Ensure minPrice is provided or default to 0
      maxPrice: 0,  // Ensure maxPrice is provided or default to 0
      minDiscount: 0,
      sort: "price_low",
      pageNumber:  1,
      pageSize: 100,
      stock: "" ,
    };
    dispatch(findAllProducts(data));
    // console.log("data",data)
},[products.deletedProduct])

  return (
    <div className='p-5 '>
      <Card className='mt-2  '>
        <CardHeader title ="All Products"></CardHeader>
        <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell> Title</TableCell>
            <TableCell align="left"> Category</TableCell>
            <TableCell align="left"> Price</TableCell>
            <TableCell align="left"> Quantity</TableCell>
            {/* <TableCell align="left"> Add Product</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.slice(0,10).map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left"><Avatar src={item.imageUrl}>
              </Avatar>
                </TableCell>
              <TableCell component="left" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="left">{item?.category?.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              
              {/* <TableCell align="left">
                <Button variant="outlined">
                  ADD
                </Button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    
    </div>
  );
}
export default ProductTable;