package com.surplus.task.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.surplus.task.domain.Product;
import com.surplus.task.dto.ProductDto;
import com.surplus.task.service.FileStorageService;
import com.surplus.task.service.ProductService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/product")
@Api(value="Surplus Kart", description="Operations pertaining to products in Application") 
public class ProductController {
	
	private ProductService productService;
	private FileStorageService fileStorageService;
	
	ProductController(ProductService productService,FileStorageService fileStorageService)
	{
		this.productService = productService;
		this.fileStorageService = fileStorageService;
	}
	
	@ApiOperation(value = "View a list of available products", response = Iterable.class)
	@ApiResponses(value = {
	        @ApiResponse(code = 200, message = "Successfully retrieved list"),
	        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
	        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
	        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
	})
	@GetMapping(value={"","/"})
	public Iterable<Product> listProduct()
	{
		Iterable<Product> listProduct = productService.list();
		return listProduct;
	}
	
	@ApiOperation(value = "Get product from product id", response = Product.class)
	@GetMapping("/getProduct/{offerId}")
	public Product getProduct(@PathVariable int offerId)
	{
		Product product = productService.getProduct(offerId) ;
		return product;
	}
	
	@ApiOperation(value = "Save/Update product.", response = Boolean.class)
//	@CrossOrigin
	@PostMapping("/save")
	public boolean saveProduct(@RequestBody ProductDto product)
	{		
		return productService.save(product);
	}
	
	@ApiOperation(value = "Save/Update image.", response = Boolean.class)
//	@CrossOrigin
	@PostMapping("/saveImage")
	public ResponseEntity<String> saveImage(@RequestParam("file") MultipartFile file) {
		String message = "";
		try {
			fileStorageService.store(file);
			//files.add(file.getOriginalFilename());
 
			message = "You successfully uploaded " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = "FAIL to upload " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	}
	
	@ApiOperation(value = "Delete product from product id", response = Boolean.class)
	@CrossOrigin
	@DeleteMapping("/delete")
	public boolean deleteProduct(@RequestParam(value="productId",required=true) int productId)
	{		
		return productService.deleteProduct(productId);
	}

}
