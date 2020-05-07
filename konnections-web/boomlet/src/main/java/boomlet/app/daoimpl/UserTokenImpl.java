package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Base64;
import java.util.concurrent.TimeUnit;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import boomlet.app.dao.UserTokenDAO;
import boomlet.app.data.User;
import boomlet.app.data.UserToken;

public class UserTokenImpl implements UserTokenDAO{
	
	private final String table_name = "user_token";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {    
	    this.jdbcTemplate = jdbcTemplate;    
	} 

	@Override
	public BigInteger generateToken(User user) {		
		
		final String sql = "INSERT INTO user_token (user_id,token,expiry) VALUES(?,?,?)";		
		final long userId = user.getId();		
		final Timestamp timestamp = new Timestamp(System.currentTimeMillis() + TimeUnit.HOURS.toMillis(24));		 
		final String token = Base64.getEncoder().encodeToString(timestamp.toString().getBytes());
		
		GeneratedKeyHolder generatedKeyHolder =  new GeneratedKeyHolder();
		
		jdbcTemplate.update(new PreparedStatementCreator(){
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql,new String[] {"id"});
				ps.setLong(1, userId);				
				ps.setString(2, token);
				ps.setTimestamp(3, timestamp);
				return ps;
			}			
		},generatedKeyHolder);		
						
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}


	@Override
	public UserToken getToken(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE id="+id ;		
		UserToken userToken;		
		try {
			userToken = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(UserToken.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return userToken;		
	}

	@Override
	public UserToken checkToken(UserToken userToken) {
		String sql = "SELECT * FROM "+table_name+" WHERE token = '"+userToken.getToken()+"'" ;		
		UserToken token;		
		try {
			token = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(UserToken.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return token;
	}
	
	

}
