package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;

import boomlet.app.dao.LinkedinDAO;
import boomlet.app.data.Linkedin;

public class LinkedImpl implements LinkedinDAO {

	private final String table_name = "linkedin";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Linkedin linkedin) {

		final String sql = "INSERT INTO " + table_name
				+ " (influencer_id,link,connections,post_cost,verified,active) VALUES(?,?,?,?,?,?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setLong(1, linkedin.getInfluencer_id());
				ps.setString(2, linkedin.getLink());
				ps.setString(3, linkedin.getConnections());
				ps.setString(4, linkedin.getPost_cost());
				ps.setBoolean(5, linkedin.isVerified());
				ps.setBoolean(6, linkedin.isActive());				
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");

	}

	@Override
	public void update(Linkedin linked, long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Linkedin> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Linkedin get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
