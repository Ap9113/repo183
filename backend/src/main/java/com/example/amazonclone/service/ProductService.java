package com.example.amazonclone.service;

import com.example.amazonclone.exception.ResourceNotFoundException;
import com.example.amazonclone.model.Product;
import com.example.amazonclone.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repo;

    public List<Product> listAll() {
        return repo.findAll();
    }

    public Product getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
    }

    public Product create(Product product) {
        return repo.save(product);
    }

    public Product update(Long id, Product productDetails) {
        Product product = getById(id);
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setStock(productDetails.getStock());
        return repo.save(product);
    }

    public void delete(Long id) {
        Product product = getById(id);
        repo.delete(product);
    }
}
