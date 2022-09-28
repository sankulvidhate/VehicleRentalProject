package com.example.demo.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;






@Entity
@Table(name="user")
public class User {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@JsonProperty("user_id")
		private Long userId;
//		@NotBlank(message = "First name must be supplied")
//		@Length(min=4,max=30,message = "Invalid first name length")
		@Column(length = 30)
		private String firstName;
		@Column(length = 30)
		private String lastName;
		@Column(length = 30,unique = true)
		private String dlNo;
//		@Email(message = "Invalid Email")
		@Column(length = 30,unique = true)
		private String email;
//		@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5-20})")
		@Column(length = 30)
		private String password;
//		@NotBlank(message = "Contact number must be supplied")
		@Column(length = 30)
		private String phone;
//		@NotBlank(message = "Address must be supplied")
		@OneToOne(cascade = CascadeType.ALL)
		private Location address;
//		@Future(message = "Driving licence  expiry date must be in future")
		@Column(length = 30)
		private LocalDate dLExpiryDate;
		@Enumerated(EnumType.STRING)
		@Column(length = 50)
		private Status status;
		private LocalDate localDate = LocalDate.now();
		@Column(name = "reset_password_token")
	    private String resetPasswordToken;
		
		
		public String getResetPasswordToken() {
			return resetPasswordToken;
		}

		public void setResetPasswordToken(String resetPasswordToken) {
			this.resetPasswordToken = resetPasswordToken;
		}

		public Long getUserId() {
			return userId;
		}

		public User() {
			super();
		}
		
		public Long getUsrId() {
			return userId;
		}
		public void setUserId(Long userId) {
			this.userId = userId;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getDlNo() {
			return dlNo;
		}
		public void setDlNo(String dlNo) {
			this.dlNo = dlNo;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public Location getAddress() {
			return address;
		}
		public void setAddress(Location address) {
			this.address = address;
		}
		public LocalDate getdLExpiryDate() {
			return dLExpiryDate;
		}
		public void setdLExpiryDate(LocalDate dLExpiryDate) {
			this.dLExpiryDate = dLExpiryDate;
		}
		public Status getStatus() {
			return status;
		}
		public void setStatus(Status status) {
			this.status = status;
		}
		public LocalDate getLocalDate() {
			return localDate;
		}
		public void setLocalDate(LocalDate localDate) {
			this.localDate = localDate;
		}
		
		
}









