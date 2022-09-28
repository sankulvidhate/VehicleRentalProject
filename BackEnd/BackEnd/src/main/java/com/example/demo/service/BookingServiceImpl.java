package com.example.demo.service;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.dto.BookingDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.VehicleDTO;
import com.example.demo.entity.Booking;
import com.example.demo.entity.User;
import com.example.demo.entity.Vehicle;
import com.example.demo.repository.IBookingDao;
import com.example.demo.repository.IUserDao;
import com.example.demo.repository.IVehicleDao;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private IBookingDao bDao;
	
	@Autowired
	private IVehicleDao vDao;
	
	@Autowired
	private IUserDao uDao;
	
	@Autowired
	private ModelMapper mapper;
	

	@Override
	public BookingDTO getBookingDetails(Long bookingId) {
		Booking booking = bDao.findByBookingId(bookingId);
		BookingDTO bookinDto = mapper.map(booking, BookingDTO.class);
		
		return bookinDto;
	}
	

	@Override
	public BookingDTO saveBookingDetail(BookingDTO bookingDto,Long userId, Long vehicleId) {
		Booking booking=mapper.map(bookingDto,Booking.class);
		
		User user= uDao.findByUserId(userId);
		Vehicle vehicle=vDao.getByVehicleId(vehicleId);
		vehicle.setStatus("UNAVAILABLE");
		booking.setUserId(user);
		booking.setVehicleId(vehicle);
		Booking persistentbooking=bDao.save(booking);
		return mapper.map(persistentbooking, BookingDTO.class);
	}
	
	@Override
	public BookingDTO returnVehicleDetails(BookingDTO bookingDto,Long userId, Long vehicleId) {
		Booking booking=mapper.map(bookingDto,Booking.class);
		
		User user= uDao.findByUserId(userId);
		Vehicle vehicle=vDao.getByVehicleId(vehicleId);
		vehicle.setStatus("AVAILABLE");
		booking.setUserId(null);
		booking.setVehicleId(null);
		Booking persistentbooking=bDao.save(booking);
		return mapper.map(persistentbooking, BookingDTO.class);
	}

	
	
	@Override
	public BookingDTO updateBookingDetails(BookingDTO updatedDetachedBooking) {
		Booking booking=mapper.map(updatedDetachedBooking,Booking.class);
		Booking updatedBooking=bDao.save(booking);
		return mapper.map(updatedBooking, BookingDTO.class);
	}


	@Override
	public String deleteBookingDetails(Long bookingId) {
		// TODO Auto-generated method stub
		return null;
	}


	
	
	
	
}
