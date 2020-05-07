package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;

import boomlet.app.dao.InfluancerDAO;
import boomlet.app.data.Influancer;


public class InfluancerImpl implements InfluancerDAO {

	private final String table_name = "influancer";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Influancer inf) {

		final String sql = "INSERT INTO " + table_name
				+ " (name,gender,email,type,contact_1,contact_2,contact_3,country,profile_image,language,location,category,vendor,remark,created_by,aproved,created_at,added_by,added_by_id,last_update_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update(new PreparedStatementCreator() {

			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setString(1, inf.getName());
				ps.setString(2, inf.getGender());
				ps.setString(3, inf.getEmail());
				ps.setString(4, inf.getType());
				ps.setString(5, inf.getContact_1());
				ps.setString(6, inf.getContact_2());
				ps.setString(7, inf.getContact_3());
				ps.setString(8, inf.getCountry());
				ps.setString(9, inf.getProfile_image());
				ps.setString(10, inf.getLanguage());
				ps.setString(11, inf.getLocation());
				ps.setString(12, inf.getCategory());
				ps.setString(13, inf.getVendor());
				ps.setString(14, inf.getRemark());
				ps.setLong(15, inf.getCreated_by());
				ps.setBoolean(16, inf.isAproved());
				ps.setString(17, LocalDate.now().toString());
				ps.setString(18, inf.getAdded_by());
				ps.setLong(19, inf.getAdded_by_id());
				ps.setDate(20, inf.getLast_update_date());
				return ps;
			}
		}, generatedKeyHolder);

		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");

	}

	@Override
	public long update(final Influancer user, final long id) {
		
		String sql = "UPDATE "+table_name+" SET ";
		
		sql += "updated_by=?, ";
		sql += "updated_by_id=?, ";
		sql += "update_request=?, ";
		sql += "update_id=? ";
		sql += "WHERE id = ?";
		
		final String queryString = sql;			
		
		long rows = jdbcTemplate.update(new PreparedStatementCreator() {

			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(queryString, new String[] { "id" });
				ps.setString(1, user.getUpdated_by());
				ps.setLong(2, user.getUpdated_by_id());	
				ps.setBoolean(3, user.isUpdate_request());
				ps.setLong(4, user.getUpdate_id());
				ps.setLong(5, id);
				return ps;
			}
			
		});
		
		return rows;
	}

	@Override
	public void delete(long id) {
		String sql = "DELETE FROM "+table_name+" WHERE id= " + id;		
		jdbcTemplate.update(sql);
	}

	@Override
	public List<Influancer> list() {

		String sql = "SELECT influancer.*, ";
		// select social table
		sql += "instagram.followers as insta_followers, ";
		sql += "facebook.followers as fb_followers, ";
		sql += "linkedin.connections as lk_connections, ";
		sql += "twitter.connections as tw_connections ";
		// END SOCIAL TABLE
		
		// JOIN Conditions
		sql += "FROM  influancer ";
		sql += "LEFT JOIN instagram ON influancer.id = instagram.influencer_id ";
		sql += "LEFT JOIN facebook ON influancer.id = facebook.influencer_id ";
		sql += "LEFT JOIN linkedin ON influancer.id = linkedin.influencer_id ";
		sql += "LEFT JOIN twitter ON influancer.id = twitter.influencer_id ";
		
		sql += "GROUP BY influancer.id ORDER BY influancer.id DESC";	

//		String sql = "SELECT "+table_name+".*, in FROM "+table_name+"  ";
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Influancer.class));
	}

	@Override
	public Influancer get(long id) {
		String sql = "SELECT * FROM "+table_name+" WHERE id= " + id;		
		Influancer influencer;		
		try {
			influencer = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Influancer.class));	
		}catch (EmptyResultDataAccessException e) {
			return null;
		}		
		return influencer;
	}

}
