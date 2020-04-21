package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;

import boomlet.app.dao.InstagramDAO;
import boomlet.app.data.Instagram;

public class InstagramImpl implements InstagramDAO{
	
	private final String table_name = "instagram";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Instagram instagram) {
		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,followers,video_cost,story_cost,post_cost,verified,active) VALUES(?,?,?,?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, instagram.getInfluencer_id());
				ps.setString(2, instagram.getLink());
				ps.setString(3, instagram.getFollowers());
				ps.setString(4, instagram.getVideo_cost());
				ps.setString(5, instagram.getStory_cost());
				ps.setString(6, instagram.getPost_cost());
				ps.setBoolean(7, instagram.isVerified());
				ps.setBoolean(8, instagram.isActive());				
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Instagram linked, long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Instagram> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Instagram get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
