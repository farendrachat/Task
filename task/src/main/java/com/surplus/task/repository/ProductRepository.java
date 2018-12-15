package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Product;



public interface ProductRepository extends CrudRepository<Product,Long>
{
	public Product findByOfferId(int OfferId);
	public Iterable<Product> findProductByName(String name);
	public Iterable<Product> findProductByCategory(String category);
}
