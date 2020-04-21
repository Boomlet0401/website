package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;

import boomlet.app.dao.TiktokDAO;
import boomlet.app.data.Tiktok;

public class TiktokImpl implements TiktokDAO{
	
	private final String table_name = "tiktok";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Tiktok tiktok) {
		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,fans,hearts,post_cost,verified,active) VALUES(?,?,?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, tiktok.getInfluencer_id());
				ps.setString(2, tiktok.getLink());
				ps.setString(3, tiktok.getFan());
				ps.setString(4, tiktok.getHearts());				
				ps.setString(5, tiktok.getPost_cost());
				ps.setBoolean(6, tiktok.isVerified());
				ps.setBoolean(7, tiktok.isActive());				
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Tiktok tiktok, long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Tiktok> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tiktok get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
