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
import boomlet.app.dao.TwitterDAO;
import boomlet.app.data.Twitter;

public class TwiterImpl implements TwitterDAO {

	private final String table_name = "twitter";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Twitter twitter) {

		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,connections,post_cost,verified,active) VALUES(?,?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, twitter.getInfluencer_id());
				ps.setString(2, twitter.getLink());
				ps.setString(3, twitter.getConnections());
				ps.setString(4, twitter.getPost_cost());
				ps.setBoolean(5, twitter.isVerified());
				ps.setBoolean(6, twitter.isActive());				
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");

	}

	@Override
	public void update(Twitter linked, long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM "+table_name+" WHERE influencer_id= " + id;		
		jdbcTemplate.update(sql);
	}

	@Override
	public List<Twitter> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Twitter get(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE influencer_id= " + id;		
		Twitter twitter;		
		try {
			twitter = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Twitter.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return twitter;
	}

}
