package com.example.demo.service;

import com.example.demo.entity.Email;

public interface IEmailService {

	 String sendSimpleMail(Email details);
	 
	 String sendMailWithAttachment(Email details);
}
