package boomlet.app.daoimpl;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import boomlet.app.dao.StatesDAO;
import boomlet.app.data.States;

public class StatesImpl implements StatesDAO{
	
	private final String table_name = "states";
	JdbcTemplate jdbcTemplate;
	public void setTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	@Override
	public States get(long id) {
		String sql = "SELECT * FROM " + table_name + " WHERE id= '" + id + "'";
		States states;
		try {
			states = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(States.class));
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
		return states;
	}
	@Override
	public List<States> list(int countryId) {
		String sql = "SELECT * FROM " + table_name+" WHERE country_id="+countryId;
		return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(States.class));	
	}
	
	

}
