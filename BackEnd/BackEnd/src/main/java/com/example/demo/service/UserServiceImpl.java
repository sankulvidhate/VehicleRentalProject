package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.LocationDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRegResponse;
import com.example.demo.entity.Location;
import com.example.demo.entity.User;
import com.example.demo.repository.IUserDao;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private IUserDao userDao;
	
	@Autowired
	private ModelMapper mapper;

	

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public Optional<User> validateUser(String email, String password) {
		Optional<User> user=userDao.findByEmailAndPassword(email, password);
		if(user!= null)
		{
			return user;
		}
		
		return null;
	}


	
	@Override
	public User authenticateUser(String em, String pass) {
		// simply call dao's method for db based authentication
		return userDao.findByEmailAndPassword(em, pass)
				.orElseThrow(() -> new RuntimeException("Invalid email or password"));
	}

	@Override
	public UserDTO saveUserDetail(UserDTO userDto) {
		User user = mapper.map( userDto, User.class);
		User persistentUser= userDao.save(user);
		return mapper.map(persistentUser, UserDTO.class);
	}// in case of no errs : hib auto dirty chking @ session.flush ---tx.commit
	// --inserts rec --L1 cache destroyed -- pooled out db cn rets to the pool
	// --rets DETACHED pojo to the caller

	@Override
	public String deleteUserDetails(Long userId) {
		String mesg = "Deletion of User details failed!!!!!!!!!!!";

		if (userDao.existsById(userId)) {
			userDao.deleteById(userId);
			mesg = "User details deleted successfully , for user id :" + userId;
		}

		return mesg;
	}

	public UserDTO getUserDetails(Long userId) {
		User user = userDao.findByUserId(userId);
		UserDTO userDto=mapper.map(user,UserDTO.class);
		return userDto;
	}

	

//	@Override
//	public String updatePassword(String token, String email) {
//		User user = userDao.findByEmail(email);
//        if (user != null) {
//        	user.setResetPasswordToken(token);
//        	userDao.save(user);
//        	return email;
//        } else {
//           return "Could not find any user with the email " + email;
//        }
//		
//    }
//     
//    public User getByResetPasswordToken(String token) {
//        return userDao.findByResetPasswordToken(token);
//	}
//    public void updatePassword(User user, String newPassword) {
//        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        String encodedPassword = passwordEncoder.encode(newPassword);
//        user.setPassword(encodedPassword);
//         
//        user.setResetPasswordToken(null);
//        userDao.save(user);
//    }


	
	
	
}
