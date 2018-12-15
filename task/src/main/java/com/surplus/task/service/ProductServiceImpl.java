package com.surplus.task.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.surplus.task.domain.Product;
import com.surplus.task.dto.ProductDto;
import com.surplus.task.repository.ProductRepository;



@Service
public class ProductServiceImpl implements ProductService {
	
	
	private ProductRepository productRepository; 
	FileStorageService fileStorageService;
   
	
	ProductServiceImpl(ProductRepository productRepository,FileStorageService fileStorageService){
		this.productRepository = productRepository;	
		this.fileStorageService = fileStorageService;
		//this.modelMapper = modelMapper;
	}


	@Override
	public Iterable<Product> list() {
		return productRepository.findAll();
	}
	
	@Override
	public Product getProduct(int offerId) {
		Product product = this.productRepository.findByOfferId(offerId);
		return product;
	}
	
	/*
	 * If prId is passed then its an update else its a save with new Id
	 */
	@Override
	public boolean save(ProductDto productDto) {
		boolean isSaved = true;
		ModelMapper modelMapper = new ModelMapper();
		try{
		Product product = modelMapper.map(productDto, Product.class);
		product.setPic1(productDto.getPic1().getBytes());
		product.setPic2(productDto.getPic2().getBytes());
		product.setPic3(productDto.getPic3().getBytes());
		product.setPic4(productDto.getPic4().getBytes());
		this.productRepository.save(product);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in ProductServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	
	@Override
	public boolean deleteProduct(int offerId){
		Product product = null;
		boolean isDeleted = true;
		try{
		product = this.productRepository.findByOfferId(offerId);
		 this.productRepository.delete(product);
		}catch(Exception ex)
		{
			isDeleted = false;
			System.out.println("exception in ProductServiceImpl is :"+ex);
		}
		return isDeleted;
	}

	@Override
	public Iterable<Product> getProductByName(String name) {
		Iterable<Product> listProd = productRepository.findProductByName(name);
		return listProd;
	}

	@Override
	public Iterable<Product> getProductByCategory(String prCategory) {
		Iterable<Product> listProd = productRepository.findProductByCategory(prCategory);
		return listProd;
	}


}
