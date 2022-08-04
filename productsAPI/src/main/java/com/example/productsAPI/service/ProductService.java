package com.example.productsAPI.service;

import com.example.productsAPI.entity.Product;

import java.util.List;

public interface ProductService
{

    Product save(Product product );

    void delete( int productId );

    List<Product> all();

    Product findById( int productId );

}
