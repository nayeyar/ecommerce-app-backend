package com.example.productsAPI.entity;

import com.example.productsAPI.controller.dto.ProductDto;

import javax.persistence.*;

@Entity
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column (name = "name")
    private String name;
    @Column (name = "description")
    private String description;
    @Column (name = "imageUrl")
    private String imageUrl;

    public Product() {}

    public Product(ProductDto productDto) {
        this.name = productDto.getName();
        this.description = productDto.getDescription();
        this.imageUrl = productDto.getImageUrl();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
