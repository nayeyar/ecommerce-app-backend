package com.example.productsAPI.controller;

//import com.example.productsAPI.repository.ProductRepository;
import com.example.productsAPI.controller.dto.ProductDto;
import com.example.productsAPI.entity.Product;
import com.example.productsAPI.service.ProductService;
import com.example.productsAPI.service.ProductServiceMySQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController{

//    final ProductRepository productRepository;

//    public ProductController(@Autowired ProductRepository productRepository)
//    {
//        this.productRepository = productRepository;
//    }
//
    // Dependency injection constructor
    final ProductService productService;
    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public Iterable<Product> getProducts(){
        return productService.all();
    }

    @CrossOrigin("*")
    @PostMapping
    public Product save(@RequestBody ProductDto productDto){

        return productService.save(new Product(productDto));
    }

    @GetMapping("/{id}")
    public Product findProductById(@PathVariable(name="id") Integer id){
        return productService.findById(id);
    }

    @PutMapping( "/{id}" )
    public Product update( @RequestBody ProductDto productDto, @PathVariable Integer id )
    {
        Product product = productService.findById( id );
        product.setName( productDto.getName() );
        product.setDescription( productDto.getDescription() );
        product.setImageUrl( productDto.getImageUrl() );
        return productService.save( product );
    }

    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        productService.delete( id );
    }


}

