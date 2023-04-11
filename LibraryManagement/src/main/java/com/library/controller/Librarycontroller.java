package com.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.library.entity.Library;
import com.library.repository.LibraryInterface;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Librarycontroller {
	
	@Autowired
	public LibraryInterface Interface;
	
	@GetMapping("/view")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Library> viewdetails()
	{
		return this.Interface.findAll();
	}
	
	@PostMapping("/delete")
	@CrossOrigin(origins="http://localhost:4200")
	public void deletebook(@RequestBody Library l1)
	{
		this.Interface.delete(l1);
	}
	
	@PostMapping("/insert")
	@CrossOrigin(origins="http://localhost:4200")
	public void insert(@RequestBody Library l2)
	{
		this.Interface.save(l2);
	}
	
	@PostMapping("/update")
	@CrossOrigin(origins="http://localhost:4200")
	public void update(@RequestBody Library l3)
	{
		this.Interface.save(l3);
	}
	

}
