package com.example.productsAPI.service;

import com.example.productsAPI.entity.Product;
import com.example.productsAPI.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceMySQL implements ProductService
{
    private final ProductRepository productRepository;

    public ProductServiceMySQL(@Autowired ProductRepository productRepository )
    {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product )
    {
        //TODO implement this method
        Product savingProduct = this.productRepository.save(product);
        return savingProduct;
    }

    @Override
    public void delete( int productId )
    {
        //TODO implement this method
        Optional<Product> deletingProductOptional = productRepository.findById(productId);
        if (!deletingProductOptional.isPresent()) {
            System.out.println("Product not found: " +productId);
        }
        Product deletingProduct = deletingProductOptional.get();
        productRepository.delete(deletingProduct);
        System.out.println("Product deleted: " + deletingProduct);
    }

    @Override
    public List<Product> all()
    {
        //TODO implement this method
        return productRepository.findAll();
    }

    @Override
    public Product findById( int productId )
    {
        //TODO implement this method
        Optional<Product> findingProductOptional = productRepository.findById( productId );
        if(!findingProductOptional.isPresent()) {
            return null;
        }

        return findingProductOptional.get();
    }
}

