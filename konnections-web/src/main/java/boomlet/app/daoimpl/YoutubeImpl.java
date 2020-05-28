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

import boomlet.app.dao.YoutubeDAO;
import boomlet.app.data.Proposal;
import boomlet.app.data.Youtube;

public class YoutubeImpl implements YoutubeDAO{
	
	private final String table_name = "youtube";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Youtube youtube) {
		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,subscribers,video_cost,verified) VALUES(?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, youtube.getInfluencer_id());
				ps.setString(2, youtube.getLink());
				ps.setString(3, youtube.getSubscribers());						
				ps.setString(4, youtube.getVideo_cost());
				ps.setBoolean(5, youtube.isVerified());					
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Youtube youtube, long id) {
		String sql = "DELETE FROM "+table_name+" WHERE influencer_id= " + id;		
		try {
			jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Proposal.class));	
		}catch (EmptyResultDataAccessException e) {
			
		}
	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM "+table_name+" WHERE influencer_id= " + id;		
		jdbcTemplate.update(sql);
	}

	@Override
	public List<Youtube> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Youtube get(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE influencer_id= " + id;		
		Youtube youtube;		
		try {
			youtube = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Youtube.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return youtube;
	}

}
