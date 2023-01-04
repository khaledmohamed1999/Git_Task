<?php
require_once('../layouts/header.php');
require_once('../logic/products.php');
require_once('../logic/categories.php');
$products = getProducts();
?>
<div class="container-md">
    <div class="col-12 px-xl-5 mb-30 left">
        <a class="btn btn-primary" href="addProducts.php" role="button">Add Product</a>
    </div>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Size</th>
                <th scope="col">Color</th>
                <th scope="col">Category</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($products as $product) { ?>
                <tr>
                <th scope="row"><?=$product['name']?></th>
                <td><?=$product['price']?></td>
                <td><?=$product['size_name']?></td>
                <td><?=$product['color_name']?></td>
                <td><?=$product['category_name']?></td>
                </tr>
                <?php }?>
            </tbody>
        </table>
    </div>
</div>

<?php require('../layouts/footer.php'); ?>