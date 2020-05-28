package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import boomlet.app.dao.FacebookDAO;
import boomlet.app.data.Facebook;

public class FacebookImpl implements FacebookDAO{
	
	private final String table_name = "facebook";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Facebook facebook) {
		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,followers,video_cost,story_cost,post_cost,verified,active) VALUES(?,?,?,?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, facebook.getInfluencer_id());
				ps.setString(2, facebook.getLink());
				ps.setString(3, facebook.getFollowers());
				ps.setString(4, facebook.getVideo_cost());
				ps.setString(5, facebook.getStory_cost());
				ps.setString(6, facebook.getPost_cost());
				ps.setBoolean(7, facebook.isVerified());
				ps.setBoolean(8, facebook.isActive());				
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Facebook facebook, long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM "+table_name+" WHERE influencer_id= " + id;		
		jdbcTemplate.update(sql);
	}

	@Override
	public List<Facebook> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Facebook get(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE influencer_id= " + id;		
		Facebook facebook;		
		try {
			facebook = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Facebook.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return facebook;
	}

}
