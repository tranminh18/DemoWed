import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_DETAILS_SUCCESS, PRODUCT_UPDATE_RESET, PRODUCT_UPDATE_SUCCESS } from "../constants/productConstants";

function ProductEditPage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails)
  const { error, loading, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate);
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate
  console.log('productDetails:',productDetails)
  console.log('successUpdate',successUpdate)
  useEffect(() => {

    if (successUpdate) {
      
        dispatch({ type: PRODUCT_UPDATE_SUCCESS })
        
        navigate('/admin/productlist')
        
    } else {
        if (!product.name || product.id !== Number(id)) {
            dispatch(listProductDetails(id))
        } else {
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setCountInStock(product.countInStock)
            setDescription(product.description)
        }
    }



}, [dispatch, product, id, successUpdate,navigate])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct({id: product.id,name,price,image,brand,category,countInStock,description}))
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", id);

    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/api/products/upload/",
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  /*return (
    <div>
      <Link to="/admin/productlist">Go Back</Link>
      <div>
        {product.map((product) => (

        <FormContainer key={product.id}>
          <h1>Edit Product</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={product.name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  value={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={uploadFileHandler}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter brand"
                  value={product.brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="countinstock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter stock"
                  value={product.countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  value={product.category}
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={product.description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          )}
        </FormContainer>
        ))}
      </div>
    </div>
  );
}

export default ProductEditPage;
*/

return (
  <div>
      <Link to='/admin/productlist'>
          Go Back
      </Link>

      <FormContainer>
          <h1>Edit Product</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

          {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
              : (
                  <Form onSubmit={submitHandler}>

                      <Form.Group controlId='name'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control

                              type='name'
                              placeholder='Enter name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                          >
                          </Form.Control>
                      </Form.Group>

                      <Form.Group controlId='price'>
                          <Form.Label>Price</Form.Label>
                          <Form.Control

                              type='number'
                              placeholder='Enter price'
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                          >
                          </Form.Control>
                      </Form.Group>


                      <Form.Group controlId='image'>
                          <Form.Label>Image</Form.Label>
                          <Form.Group controlId="image">
                          <Form.Label>Image</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={uploadFileHandler}
                            ></Form.Control>
                        </Form.Group>

                        

                      </Form.Group>


                      <Form.Group controlId='brand'>
                          <Form.Label>Brand</Form.Label>
                          <Form.Control

                              type='text'
                              placeholder='Enter brand'
                              value={brand}
                              onChange={(e) => setBrand(e.target.value)}
                          >
                          </Form.Control>
                      </Form.Group>

                      <Form.Group controlId='countinstock'>
                          <Form.Label>Stock</Form.Label>
                          <Form.Control

                              type='number'
                              placeholder='Enter stock'
                              value={countInStock}
                              onChange={(e) => setCountInStock(e.target.value)}
                          >
                          </Form.Control>
                      </Form.Group>

                      <Form.Group controlId='category'>
                          <Form.Label>Category</Form.Label>
                          <Form.Control

                              type='text'
                              placeholder='Enter category'
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                          >
                          </Form.Control>
                      </Form.Group>

                      <Form.Group controlId='description'>
                          <Form.Label>Description</Form.Label>
                          <Form.Control

                              type='text'
                              placeholder='Enter description'
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                          >
                          </Form.Control>
                      </Form.Group>


                      <Button type='submit' variant='primary'>
                          Update
                  </Button>

                  </Form>
              )}

      </FormContainer >
  </div>

)
}

export default ProductEditPage;


