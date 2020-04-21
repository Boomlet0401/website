package boomlet.app.daoimpl;

import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import boomlet.app.dao.UserDAO;
import boomlet.app.data.User;

public class UserImpl implements UserDAO{
	
	private final String table_name = "user";	
	
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {    
	    this.jdbcTemplate = jdbcTemplate;    
	} 
		

	@Override
	public long save(User user) {		
		String sql = "INSERT INTO "+table_name+" (name,email,pass,mobile) VALUES(?,?,?,?)";		
		return jdbcTemplate.update(sql,user.getName(),user.getEmail(),user.getPass(),user.getMobile());
	}

	@Override
	public void update(User user, long id) {
		// TODO Auto-generated method stub		
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub		
	}

	@Override
	public List<User> list() {
		String sql = "SELECT * FROM "+table_name;
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(User.class));
	}

	
	@Override
	public User get(String email) {
		String sql = "SELECT * FROM "+table_name+" WHERE email= '" + email + "'";		
		User user;		
		try {
			user = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(User.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return user;	    
	}


	@Override
	public User getByMobile(String mobile) {
		String sql = "SELECT * FROM "+table_name+" WHERE mobile= '" + mobile + "'";		
		User user;		
		try {
			user = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(User.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return user;		
	}


	@Override
	public User checkLogin(String email, String pass) {
		String sql = "SELECT * FROM "+table_name+" WHERE email= '" + email + "' AND pass= '"+pass+"' ";		
		User user;		
		try {
			user = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(User.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return user;
	}
	

}
