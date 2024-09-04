import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, FormControl, InputLabel, CircularProgress } from "@mui/material";

const SizeDialog = ({ onClose, onSelectSize }) => {
    const [selectedSize, setSelectedSize] = useState(""); // State to hold the selected size
    const [loading, setLoading] = useState(false);
  
    const handleSelectSize = (event) => {
      setSelectedSize(event.target.value);
    };
  
    const handleConfirm = async () => {
      if (!selectedSize) {
        // Show a message or handle the case gracefully
        return;
      }
      
      setLoading(true); // Show loader
      
      try {
        // Call onSelectSize to set the selected size in the parent component
        await onSelectSize(selectedSize);
      
        // Close the dialog
        onClose();
      } catch (error) {
        console.error("Error confirming size:", error);
      } finally {
        setLoading(false); // Hide loader
      }
    };
  
    return (
        <Dialog open={true} onClose={onClose} maxWidth="xs">
        <DialogTitle>Select Size</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="size-label">Size</InputLabel>
            <Select
              labelId="size-label"
              id="size"
              value={selectedSize}
              onChange={handleSelectSize}
              fullWidth
            >
              <MenuItem value="S">Small</MenuItem>
              <MenuItem value="M">Medium</MenuItem>
              <MenuItem value="L">Large</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedSize || loading}
            variant="contained"
            color="primary"
            disableElevation
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Add To Cart'
            )}
          </Button>
        </DialogActions>
      </Dialog>
      
    );
  };
  

export default SizeDialog;
