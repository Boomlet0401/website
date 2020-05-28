package boomlet.app.daoimpl;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import boomlet.app.dao.DisclaimerDAO;
import boomlet.app.data.Disclaimer;


public class DisclaimerImpl implements DisclaimerDAO{
	
	private final String table_name = "disclaimer";

	JdbcTemplate jdbcTemplate;

	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public BigInteger save(final Disclaimer disclaimer) {
		final String sql = "INSERT INTO " + table_name + " (detail) VALUES(?)";
		GeneratedKeyHolder generatedKeyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql, new String[] { "id" });
				ps.setString(1, disclaimer.getDetail());						
				return ps;
			}
		}, generatedKeyHolder);
		return (BigInteger) generatedKeyHolder.getKeys().get("GENERATED_KEY");
	}

	@Override
	public void update(Disclaimer disclaimer, long id) {
		// TODO Auto-generated method stub		
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub		
	}

	@Override
	public List<Disclaimer> list() {
		String sql = "SELECT * FROM " + table_name;
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Disclaimer.class));
	}

	@Override
	public Disclaimer get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
