import React, { useState, Fragment } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";

const initialSizes = [
  { name: "", quantity: 0 },
  { name: "", quantity: 0 },
  { name: "", quantity: 0 },
];

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    price:"",
    discountedPrice: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
    console.log(product);
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);
    const sizes = [...product.size];
    sizes[index][name] = value;
    setProduct((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  

  return (
    <div className="createProductContainer p-10">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center"
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              value={product.imageUrl}
              onInput={(e) => {
                const inputValue = e.target.value;
                setProduct((prevState) => ({
                  ...prevState,
                  imageUrl: inputValue,
                }));
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={product.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={product.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={product.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={product.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullwidth
              label="Discounted Percentage"
              name="discountPersent"
              value={product.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={product.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                {/* <p className="text-center text-white bg-black">Men</p> */}
                <MenuItem value="men"> Men</MenuItem>
                {/* <p className="text-center text-white bg-black">Women</p> */}
                <MenuItem value="women">Women</MenuItem>
                {/* <p className="text-center text-white bg-black">Kids</p> */}
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={product.secondLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="clothing"> Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={product.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <p className="text-center text-white bg-black">Men Clothings</p>
                <MenuItem value="t-shirt">T-Shirts</MenuItem>
                <MenuItem value="kurta">Mens Kurtas</MenuItem>
                <MenuItem value="jeans">Men Jeans</MenuItem>
                <MenuItem value="shirt">Shirt</MenuItem>
                <br/>
                <p className="text-center text-white bg-black">Women Clothing</p>
                <MenuItem value="tops">Tops</MenuItem>
                <MenuItem value="women_dress">Dresses</MenuItem>
                <MenuItem value="women_jeans">Women Jeans</MenuItem>
                <MenuItem value="kurtas">Women kurtas</MenuItem>
                <MenuItem value="sweater">Women Sweater</MenuItem>
                <MenuItem value="lengha_choli">Women lenga</MenuItem>
                <p className="text-center text-white bg-black">Women Accessories</p>
                <MenuItem value="belt">Belts</MenuItem>
                <p className="text-center text-white bg-black">Women Brands</p>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={product.description}
            />
          </Grid>
          {product.size.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  // required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
