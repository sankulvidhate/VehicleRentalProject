package com.example.demo.exc_handler;


import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.demo.custom_exceptions.ResourceNotFoundException;
import com.example.demo.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
	
	
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
//		Map<String, String> errorMap= new HashMap<>();
//		for(FieldError e : ex.getFieldErrors())
//			errorMap.put(e.getField(),e.getDefaultMessage());
		
		Map<String, String> errorMap=ex.getFieldErrors().stream().collect(Collectors.toMap(f->f.getField(),f->f.getDefaultMessage()));
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);
	}
	
	// add exc handling method , specifically to handle ResourceNotFoundExc
		@ExceptionHandler(ResourceNotFoundException.class)
		public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
			System.out.println("handle res not found.... ");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(e.getMessage()));
			
		}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handleException(Exception e) {
	System.out.println("in runtime exc handler");
	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error :"+e.getMessage());
}
	
}
