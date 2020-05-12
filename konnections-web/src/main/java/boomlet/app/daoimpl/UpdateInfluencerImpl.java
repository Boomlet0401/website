package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;

import boomlet.app.dao.UpdateInfluencerDAO;
import boomlet.app.data.UpdateInfluencer;

public class UpdateInfluencerImpl implements UpdateInfluencerDAO{
	
	private final String table_name = "influencer_update";
	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final UpdateInfluencer updateInfluencer) {
		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,data,request_by,request_by_id,status) VALUES(?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, updateInfluencer.getInfluencer_id());
				ps.setString(2, updateInfluencer.getData());
				ps.setString(3, updateInfluencer.getRequest_by());
				ps.setLong(4, updateInfluencer.getRequest_by_id());
				ps.setString(5, updateInfluencer.getStatus());
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(UpdateInfluencer updateInfluencer, long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<UpdateInfluencer> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UpdateInfluencer get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
