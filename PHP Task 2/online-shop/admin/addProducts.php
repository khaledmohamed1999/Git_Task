<?php
require_once('../layouts/header.php');
?>
<div class="container-fluid">
  <div class="row px-xl-5">
    <div class="col-lg-8">
      <h5 class="section-title position-relative text-uppercase mb-3">
        <span class="bg-secondary pr-3">Add Product</span>
      </h5>
      <div class="bg-light p-30 mb-5">
        <div class="row">
          <div class="col-md-6 form-group">
            <label>Product Name</label>
            <input class="form-control" type="text" placeholder="Product 1" />
          </div>
          <div class="col-md-6 form-group">
            <label>Barcode</label>
            <input class="form-control" type="text" placeholder="Barcode" />
          </div>
          <div class="col-md-6 form-group">
            <label>Price</label>
            <input class="form-control" type="text" placeholder="150" />
          </div>
          <div class="col-md-6 form-group">
          <label>Discount Rate</label>
            <input class="form-control" type="text" placeholder="15" />
          </div>
          <div class="col-md-6 form-group">
            <label>Category</label>
            <select class="custom-select">
              <option selected>Select A Category</option>
              <option>Electronics</option>
              <option>Clothes</option>
            </select>
          </div>
          <div class="col-md-6 form-group">
            <label>Color</label>
            <select class="custom-select">
              <option selected>Select A Color</option>
              <option>Black</option>
              <option>White</option>
              <option>Blue</option>
            </select>
          </div>
          <div class="col-md-6 form-group">
            <label>Size</label>
            <select class="custom-select">
              <option selected>Select A Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div class="col-md-6 form-group">
            <label>Upload Image</label>
            <input class="form-control" type="file" multiple>
          </div>
          <div class="col-md-12 form-group">
            <label>Description</label>
            <textarea class="form-control" rows="4" placeholder="Product Description Goes Here"></textarea>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2 px-xl-5 mb-30 left">
        <a class="btn btn-primary" role="button">Add The Product</a>
    </div>
</div>



<?php require('../layouts/footer.php'); ?>
