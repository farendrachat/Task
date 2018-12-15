package com.surplus.task.service;

import com.surplus.task.domain.Product;
import com.surplus.task.dto.ProductDto;

public interface ProductService {
	
	public Iterable<Product> list();	
	public Iterable<Product> getProductByCategory(String prCategory);
	public boolean save (ProductDto product);
	public boolean deleteProduct(int prId);
	Iterable<Product> getProductByName(String name);
	Product getProduct(int offerId);

}
